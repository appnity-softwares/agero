const fs = require('fs');

const report = JSON.parse(fs.readFileSync('report-v3.json', 'utf8'));

const scores = {
    Performance: report.categories.performance.score * 100,
    Accessibility: report.categories.accessibility.score * 100,
    'Best Practices': report.categories['best-practices'].score * 100,
    SEO: report.categories.seo.score * 100,
};

let md = '# 🚦 Lighthouse Audit Report\n\n## 📊 Overall Scores\n\n';
md += '| Category | Score |\n|---|---|\n';
Object.entries(scores).forEach(([cat, score]) => {
    md += `| ${cat} | ${score.toFixed(0)} |\n`;
});

md += '\n## 🔍 Critical Issues & Recommendations\n\n';

const audits = Object.values(report.audits).filter(audit => {
    return (audit.score !== null && audit.score < 0.9) || (audit.scoreDisplayMode === 'binary' && audit.score === 0);
}).sort((a, b) => (a.score || 0) - (b.score || 0));

const categories = report.categories;

function getCategoryForAudit(auditId) {
    for (const [catId, cat] of Object.entries(categories)) {
        if (cat.auditRefs.some(ref => ref.id === auditId)) {
            return cat.title;
        }
    }
    return 'Other';
}

const issuesByCategory = {};

audits.forEach(audit => {
    const category = getCategoryForAudit(audit.id);
    if (!issuesByCategory[category]) {
        issuesByCategory[category] = [];
    }
    issuesByCategory[category].push(audit);
});

for (const [category, items] of Object.entries(issuesByCategory)) {
    if (items.length > 0) {
        md += `### ${category}\n\n`;
        items.slice(0, 5).forEach(audit => { // Top 5 per category
            md += `#### ${audit.title} (Score: ${audit.score !== null ? (audit.score * 100).toFixed(0) : 'N/A'})\n`;
            md += `> ${audit.description}\n\n`;
            if (audit.displayValue) {
                md += `**Impact:** ${audit.displayValue}\n\n`;
            }
            // Add console errors detail
            if (audit.id === 'errors-in-console' && audit.details && audit.details.items) {
                md += '**Console Errors:**\n';
                audit.details.items.forEach(item => {
                    md += `- ${item.description}\n`;
                });
                md += '\n';
            }
        });
    }
}

md += '## ✅ Passed Audits (Top)\n\n';
const passed = Object.values(report.audits).filter(a => a.score === 1).slice(0, 10);
passed.forEach(p => {
    md += `- ${p.title}\n`;
});

fs.writeFileSync('report.md', md);
console.log('Report generated: report.md');
