# 🚦 Lighthouse Audit Report

## 📊 Overall Scores

| Category | Score |
|---|---|
| Performance | 55 |
| Accessibility | 76 |
| Best Practices | 96 |
| SEO | 100 |

## 🔍 Critical Issues & Recommendations

### Performance

#### First Contentful Paint (Score: 0)
> First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).

**Impact:** 43.7 s

#### Largest Contentful Paint (Score: 0)
> Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

**Impact:** 87.3 s

#### Speed Index (Score: 0)
> Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).

**Impact:** 43.7 s

#### Time to Interactive (Score: 0)
> Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).

**Impact:** 87.4 s

#### Minimize main-thread work (Score: 0)
> Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)

**Impact:** 3.0 s

### Best Practices

#### Displays images with incorrect aspect ratio (Score: 0)
> Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).

### Accessibility

#### Buttons do not have an accessible name (Score: 0)
> When a button doesn't have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.11/button-name).

#### Background and foreground colors do not have a sufficient contrast ratio. (Score: 0)
> Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast).

#### Heading elements are not in a sequentially-descending order (Score: 0)
> Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.11/heading-order).

#### Links do not have a discernible name (Score: 0)
> Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.11/link-name).

## ✅ Passed Audits (Top)

- Uses HTTPS
- Screenshot Thumbnails
- Final Screenshot
- Total Blocking Time
- Max Potential First Input Delay
- No browser errors logged to the console
- Initial server response time was short
- Avoid multiple page redirects
- Serves images with appropriate resolution
- Avoids deprecated APIs
