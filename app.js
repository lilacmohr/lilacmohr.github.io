// Set canonical URL to always point to lilacmohr.com, preventing duplicate-content
// confusion when the same site is served from lilacmohr.github.io.
(function () {
    const canonical = document.getElementById('canonical-url');
    if (canonical) {
        canonical.href = 'https://lilacmohr.com' + window.location.pathname + window.location.search;
    }
}());

// Main application logic
class ArticleManager {
    constructor() {
        this.articles = [];
        this.currentCategory = 'all';
        this.init();
    }

    async init() {
        await this.loadArticles();
        this.updateCategoryMenus();
        this.setupEventListeners();
        this.renderContent();
    }

    async loadArticles() {
        try {
            const response = await fetch(`articles.json?v=${Date.now()}`);
            const data = await response.json();
            this.articles = data.articles.sort((a, b) => 
                (a.displayOrder ?? Infinity) - (b.displayOrder ?? Infinity)
            );
        } catch (error) {
            console.error('Error loading articles:', error);
            this.articles = [];
        }
    }

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-tag');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.renderArticlesGrid();
            });
        });
    }

    renderContent() {
        // Check if we're on the homepage or category page
        const featuredSection = document.querySelector('.featured-section');
        const featuredContainer = document.getElementById('featured-articles');
        const articlesContainer = document.getElementById('articles-grid');
        
        if (featuredSection && featuredContainer) {
            if (this.articles.length >= 10) {
                featuredSection.style.display = '';
                this.renderFeaturedArticles();
            } else {
                featuredSection.style.display = 'none';
            }
        }
        
        if (articlesContainer) {
            this.renderArticlesGrid();
        }

        // Check for category page
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('cat');
        if (category) {
            this.renderCategoryPage(category);
        }
    }

    updateCategoryMenus() {
        const categoryCounts = this.articles.reduce((counts, article) => {
            counts[article.category] = (counts[article.category] || 0) + 1;
            return counts;
        }, {});

        const categoryLinks = document.querySelectorAll('.nav-links [data-category]');
        categoryLinks.forEach((link) => {
            const category = link.dataset.category;
            const hasArticles = (categoryCounts[category] || 0) > 0;
            link.style.display = hasArticles ? '' : 'none';
        });

        const filterButtons = document.querySelectorAll('#category-filters .filter-tag');
        filterButtons.forEach((button) => {
            const category = button.dataset.category;
            if (category === 'all') {
                button.style.display = this.articles.length > 0 ? '' : 'none';
                return;
            }
            const hasArticles = (categoryCounts[category] || 0) > 0;
            button.style.display = hasArticles ? '' : 'none';
        });
    }

    async renderFeaturedArticles() {
        const container = document.getElementById('featured-articles');
        if (!container) return;

        const featured = this.articles.slice(0, 3);

        // Fetch a real excerpt from the lead article's markdown
        let leadExcerpt = `<p>${featured[0].preview}</p>`;
        try {
            const response = await fetch(`articles/${featured[0].id}.md`);
            if (response.ok) {
                const markdown = await response.text();
                leadExcerpt = this.extractExcerptHtml(markdown);
            }
        } catch (e) { /* fallback to preview */ }

        const leadCard = this.createLeadArticleCard(featured[0], leadExcerpt);
        const otherCards = featured.slice(1).map(a => this.createArticleCard(a)).join('');
        container.innerHTML = leadCard + otherCards;
    }

    extractExcerptHtml(markdown) {
        const paragraphs = markdown.split(/\n\n+/);
        const result = [];
        for (const para of paragraphs) {
            const t = para.trim();
            if (!t || t.startsWith('#') || t.startsWith('**[') ||
                t.startsWith('*Image') || t.startsWith('*Alt') ||
                t.startsWith('![') || t.startsWith('---')) continue;
            const cleaned = t
                .replace(/\*\*([^*]+)\*\*/g, '$1')
                .replace(/\*([^*]+)\*/g, '$1')
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                .replace(/`[^`]+`/g, '')
                .replace(/^[-*+]\s+/gm, '')
                .replace(/\s+/g, ' ')
                .trim();
            if (!cleaned) continue;
            result.push(`<p>${cleaned}</p>`);
            if (result.length >= 5) break;
        }
        return result.join('');
    }

    extractExcerpt(markdown, maxChars) {
        const lines = markdown.split('\n');
        const bodyLines = [];
        for (const line of lines) {
            const t = line.trim();
            if (!t || t.startsWith('#') || t.startsWith('**[') ||
                t.startsWith('*Image') || t.startsWith('*Alt') ||
                t.startsWith('![') || t.startsWith('---')) continue;
            bodyLines.push(t);
        }
        const text = bodyLines.join(' ')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/`[^`]+`/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (text.length <= maxChars) return text;
        const cut = text.lastIndexOf(' ', maxChars);
        return text.substring(0, cut > 0 ? cut : maxChars);
    }

    createLeadArticleCard(article, excerpt) {
        const categoryNames = {
            'implementation': 'AI Implementation',
            'measurement-strategy': 'Measurement & Strategy',
            'strategy-culture': 'Strategy & Culture',
            'case-studies': 'Case Studies & Tools',
            'culture': 'Culture & Leadership'
        };
        return `
            <article class="article-card article-card-lead" data-category="${article.category}" onclick="window.location.href='article.html?id=${article.id}'">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <span class="article-category">${categoryNames[article.category]}</span>
                    <h2 class="article-title article-title-lead">${article.title}</h2>
                    <div class="article-excerpt-wrap">
                        <div class="article-excerpt">${excerpt}</div>
                    </div>
                    <span class="article-read-more">Continue reading →</span>
                    <div class="article-meta">
                        <span class="article-date">${this.formatDate(article.date)}</span>
                        <span class="article-read-time">${article.readTime || '5 min read'}</span>
                    </div>
                </div>
            </article>
        `;
    }

    renderArticlesGrid() {
        const container = document.getElementById('articles-grid');
        if (!container) return;

        let filtered = this.articles;
        if (this.currentCategory !== 'all') {
            filtered = this.articles.filter(a => a.category === this.currentCategory);
        }

        container.innerHTML = filtered.map(article => this.createArticleCard(article)).join('');
    }

    renderCategoryPage(category) {
        const container = document.getElementById('category-articles');
        if (!container) return;

        const filtered = this.articles.filter(a => a.category === category);
        container.innerHTML = filtered.map(article => this.createArticleCard(article)).join('');

        // Update category title
        const titleElement = document.getElementById('category-title');
        if (titleElement) {
            const categoryNames = {
                'implementation': 'AI Implementation',
                'measurement-strategy': 'Measurement & Strategy',
                'strategy-culture': 'Strategy & Culture',
                'case-studies': 'Case Studies & Tools',
                'culture': 'Culture & Leadership'
            };
            titleElement.textContent = categoryNames[category] || category;
        }

        // Setup side-scrolling navigation
        this.setupCategoryNav(category);
    }

    setupCategoryNav(currentCategory) {
        const navContainer = document.querySelector('.category-nav-container');
        if (!navContainer) return;

        const filtered = this.articles.filter(a => a.category === currentCategory);
        navContainer.innerHTML = filtered.map((article, index) => `
            <a href="article.html?id=${article.id}" 
               class="category-nav-item ${index === 0 ? 'active' : ''}"
               data-id="${article.id}">
                ${article.title}
            </a>
        `).join('');
    }

    createArticleCard(article) {
        const categoryNames = {
            'implementation': 'AI Implementation',
            'measurement-strategy': 'Measurement & Strategy',
            'strategy-culture': 'Strategy & Culture',
            'case-studies': 'Case Studies & Tools',
            'culture': 'Culture & Leadership'
        };

        return `
            <article class="article-card" data-category="${article.category}" onclick="window.location.href='article.html?id=${article.id}'">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <span class="article-category">${categoryNames[article.category]}</span>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-preview">${article.preview}</p>
                    <div class="article-meta">
                        <span class="article-date">${this.formatDate(article.date)}</span>
                        <span class="article-read-time">${article.readTime || '5 min read'}</span>
                    </div>
                </div>
            </article>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

// Article Page Logic
class ArticlePage {
    constructor() {
        this.article = null;
        this.init();
    }

    async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');
        
        if (articleId) {
            await this.loadArticle(articleId);
        }
    }

    async loadArticle(id) {
        try {
            const response = await fetch(`articles.json?v=${Date.now()}`);
            const data = await response.json();
            this.article = data.articles.find(a => a.id === id);
            
            if (this.article) {
                this.renderArticle();
                await this.loadArticleContent();
            }
        } catch (error) {
            console.error('Error loading article:', error);
        }
    }

    async loadArticleContent() {
        try {
            const response = await fetch(`articles/${this.article.id}.md`);
            const markdown = await response.text();
            const bodyElement = document.querySelector('.article-body');
            if (bodyElement && typeof marked !== 'undefined') {
                // Configure marked for better output
                marked.setOptions({
                    breaks: true,
                    gfm: true
                });
                bodyElement.innerHTML = marked.parse(markdown);
            }
        } catch (error) {
            console.error('Error loading article content:', error);
        }
    }

    renderArticle() {
        const categoryNames = {
            'implementation': 'AI Implementation',
            'measurement-strategy': 'Measurement & Strategy',
            'strategy-culture': 'Strategy & Culture',
            'case-studies': 'Case Studies & Tools',
            'culture': 'Culture & Leadership'
        };

        document.title = `${this.article.title} — Lilac Mohr`;

        const titleElement = document.querySelector('.article-page-title');
        if (titleElement) {
            titleElement.textContent = this.article.title;
        }

        const metaElement = document.querySelector('.article-page-meta');
        if (metaElement) {
            metaElement.innerHTML = `
                <span>${categoryNames[this.article.category]}</span>
                <span>${this.formatDate(this.article.date)}</span>
                <span>${this.article.readTime || '5 min read'}</span>
            `;
        }

        const heroImageContainer = document.getElementById('article-hero-image');
        if (heroImageContainer && this.article.image) {
            heroImageContainer.innerHTML = `<img src="${this.article.image}" alt="${this.article.title}">`;
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on
    const path = window.location.pathname;
    
    if (path.includes('article.html')) {
        new ArticlePage();
    } else {
        new ArticleManager();
    }
});
