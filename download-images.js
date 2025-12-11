const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Görselleri bölümlere göre kategorize et
const imageCategories = {
  // Logo & Branding
  logo: [
    { url: "https://framerusercontent.com/images/ZtkIvV9hIcs1f6TfzktJa1zfleo.svg", name: "logo-main.svg" },
  ],
  
  // Navigation Icons
  navigation: [
    { url: "https://framerusercontent.com/images/fPxjJtXeFJXbso5FJutghsqpPw.svg", name: "nav-menu.svg" },
    { url: "https://framerusercontent.com/images/jpWd8IINX7Ae6nKVB5ODhiDg.svg", name: "nav-close.svg" },
  ],
  
  // Hero Section
  hero: [
    { url: "https://framerusercontent.com/images/0kRYx0NpOuTv0ToWN2d2VoQC5A.png", name: "hero-main.png" },
    { url: "https://framerusercontent.com/images/bOZe3ThmdFaGjs87Gu7Fup6M4.png", name: "hero-background.png" },
  ],
  
  // Features Section Icons
  features: [
    { url: "https://framerusercontent.com/images/uGsJb0bCkNmlFDZURhW07XCKEw.svg", name: "feature-resource-allocation.svg" },
    { url: "https://framerusercontent.com/images/tpve6FmcL94IcmHKpoEFwz8qteM.svg", name: "feature-agile-workflow.svg" },
    { url: "https://framerusercontent.com/images/O2zpxE43gMWGieYltLfY3PTg8g.svg", name: "feature-task-management.svg" },
    { url: "https://framerusercontent.com/images/TvyGTuuXJxfInGjBc9Wqrg6FE0.svg", name: "feature-collaboration.svg" },
    { url: "https://framerusercontent.com/images/qicFdSn0qmOPyad7u6uh71kfZg.svg", name: "feature-dashboard.svg" },
    { url: "https://framerusercontent.com/images/Tt3Aa5nIhG5wm8yRfytxzIkCX3E.svg", name: "feature-analytics.svg" },
    { url: "https://framerusercontent.com/images/jnu1GzcIypMh49eT4WDGSNIr5dY.svg", name: "feature-scheduling.svg" },
    { url: "https://framerusercontent.com/images/YK4mkhN7zEg8pbr2dIJLdIY3dYw.svg", name: "feature-communication.svg" },
    { url: "https://framerusercontent.com/images/1pCNSuV3r3SzB2zXC32sYRA.svg", name: "feature-document-sharing.svg" },
    { url: "https://framerusercontent.com/images/14gZDl09yMMVq1rrQMgjekorAWc.svg", name: "feature-security.svg" },
  ],
  
  // Unique Features Section
  uniqueFeatures: [
    { url: "https://framerusercontent.com/images/rSlUq5EDuaY4PFCdc9IpSoaI.svg", name: "unique-meeting-scheduling.svg" },
    { url: "https://framerusercontent.com/images/DRUalsx8HfTGcymbYQmgZG60M08.svg", name: "unique-communication.svg" },
    { url: "https://framerusercontent.com/images/uWsf9kG6V5iRZce84Aj8XosVWA.svg", name: "unique-notifications.svg" },
    { url: "https://framerusercontent.com/images/elaiwu3vdQobrXw9GPJuwKzowA4.svg", name: "unique-feedback.svg" },
    { url: "https://framerusercontent.com/images/eFQwJ3j7nBh0TMoYWTvr5hAcCw.svg", name: "unique-attachments.svg" },
  ],
  
  // Top Features Section
  topFeatures: [
    { url: "https://framerusercontent.com/images/eGEWukNWWMNdkYqbgM7kLc5kdRQ.svg", name: "top-feature-ui.svg" },
    { url: "https://framerusercontent.com/images/JwGU4654pxNKzp67SAHHU6uevw.svg", name: "top-feature-collaboration.svg" },
    { url: "https://framerusercontent.com/images/9Ead1zXTekSsCqNtEJeN7h4rw8.svg", name: "top-feature-analytics.svg" },
    { url: "https://framerusercontent.com/images/K5anQEbH7WVVQ4JJUcMvGwtIEnA.svg", name: "top-feature-security.svg" },
    { url: "https://framerusercontent.com/images/hIqYVCLQcrMAYT6x8xlcP1ndI.svg", name: "top-feature-tracking.svg" },
    { url: "https://framerusercontent.com/images/2ZcGupaZOhZQNCPR9p0WrAOn4xg.svg", name: "top-feature-syncing.svg" },
    { url: "https://framerusercontent.com/images/s1mB1pw9RUP9piQQ1E57USPnDco.svg", name: "top-feature-member-management.svg" },
    { url: "https://framerusercontent.com/images/BgNCpP0U1tgrLk5grErK9UXaWlk.svg", name: "top-feature-deadline.svg" },
  ],
  
  // Why SAP Section
  whySap: [
    { url: "https://framerusercontent.com/images/vsOe32VhfSeEhdLeGdL9rBZdCs.svg", name: "why-innovative-solutions.svg" },
    { url: "https://framerusercontent.com/images/g6AMKNYkPnkOD0dWSxqhj8PyJyE.svg", name: "why-reliable-support.svg" },
    { url: "https://framerusercontent.com/images/G1qgR7RJSObzXfCBnke8M5yACrE.svg", name: "why-proven-results.svg" },
    { url: "https://framerusercontent.com/images/who9t1FmV5PLQ87Hz3KNL1zOpI.svg", name: "why-trusted-security.svg" },
  ],
  
  // Benefits Section
  benefits: [
    { url: "https://framerusercontent.com/images/k1GDwDk5uCymLeYdutBFgyjIL48.svg", name: "benefit-efficiency.svg" },
    { url: "https://framerusercontent.com/images/Rq1CWBb8PeSRCOSyOfJlUOcrRU.svg", name: "benefit-collaboration.svg" },
    { url: "https://framerusercontent.com/images/M9MFHlLDbRLa0YnO3PC0DxBu0.svg", name: "benefit-insights.svg" },
    { url: "https://framerusercontent.com/images/sFBLAcUiSGE8UvKL3FfTM8mbkM.svg", name: "benefit-scalability.svg" },
    { url: "https://framerusercontent.com/images/lE6exgFCC7D83cPTOY1ydeVc5Q.svg", name: "benefit-mobile.svg" },
  ],
  
  // Product Highlights
  productHighlights: [
    { url: "https://framerusercontent.com/images/pi07XEcl0WhZJgYMvg9cF6dv0.svg", name: "highlight-task-management.svg" },
    { url: "https://framerusercontent.com/images/fdHBnPTMBoZJfTI82U3pIbJab4.svg", name: "highlight-collaboration.svg" },
    { url: "https://framerusercontent.com/images/jV8PRnzur1pzcx5kpoFi2XK4.svg", name: "highlight-workflow.svg" },
  ],
  
  // Testimonials
  testimonials: [
    { url: "https://framerusercontent.com/images/FHO7Vu7FLdbNDHNFNeHrtshWqU.jpg", name: "testimonial-1.jpg" },
    { url: "https://framerusercontent.com/images/g58YgwxKaLgyca2r5e0aXzEuM4Y.jpg", name: "testimonial-2.jpg" },
    { url: "https://framerusercontent.com/images/5e832DvlJSQmefb6M0mzDuGEo.jpg", name: "testimonial-3.jpg" },
    { url: "https://framerusercontent.com/images/juGsF7keRAPRVU0V26Xmp9GjbU.png", name: "testimonial-avatar-1.png" },
    { url: "https://framerusercontent.com/images/QFtQgR5zLX9fUKKAMysMhtP9U5M.png", name: "testimonial-avatar-2.png" },
    { url: "https://framerusercontent.com/images/UAAxrCvTYxUJ4RMcQOY6Bkkhmn4.png", name: "testimonial-avatar-3.png" },
    { url: "https://framerusercontent.com/images/xGlpET6hIhh5WqRLCuPFaAmlnjc.png", name: "testimonial-avatar-4.png" },
  ],
  
  // Pricing Section
  pricing: [
    { url: "https://framerusercontent.com/images/qpDZ05AACAyO52WOnvrc0Bz3i0Y.svg", name: "pricing-check.svg" },
    { url: "https://framerusercontent.com/images/6bbpDlDVRgkkd2EovWeoTLe15M.svg", name: "pricing-cross.svg" },
  ],
  
  // FAQ Section
  faq: [
    { url: "https://framerusercontent.com/images/zLAYryjUNv6vUzsylSmZKZy8.svg", name: "faq-arrow-down.svg" },
    { url: "https://framerusercontent.com/images/pyh5ZJ7W5CfsDXxvByOWExwxtc.svg", name: "faq-arrow-up.svg" },
  ],
  
  // Contact Section
  contact: [
    { url: "https://framerusercontent.com/images/15w07QFnh04iaCMOJNHKrtDJNU.svg", name: "contact-email.svg" },
    { url: "https://framerusercontent.com/images/0qRtwRIBnXaHzw9fQqqYcz2Oew.svg", name: "contact-phone.svg" },
    { url: "https://framerusercontent.com/images/V0SmoVPU1tdoEEhuGxu24JRAj5k.svg", name: "contact-location.svg" },
  ],
  
  // Social Media Icons
  social: [
    { url: "https://framerusercontent.com/images/KsdYrytFAS5L4zLiLBxNXErAYY.svg", name: "social-linkedin.svg" },
    { url: "https://framerusercontent.com/images/5RlXjISAoh2vfp5MeLPNxQZkTE.svg", name: "social-twitter.svg" },
    { url: "https://framerusercontent.com/images/LktAjoPqdmsw8Dc9ijcEaTTQn2M.svg", name: "social-instagram.svg" },
    { url: "https://framerusercontent.com/images/awpmM0jA3i02bWaMt5NRzRpCt4.svg", name: "social-facebook.svg" },
  ],
  
  // Footer
  footer: [
    { url: "https://framerusercontent.com/images/lFEVX9dWHiHXwZyY5Y1R1RCmW7U.svg", name: "footer-logo.svg" },
    { url: "https://framerusercontent.com/images/6bZ0A2PCtBZD7XutwDhJ6XAIMM.svg", name: "footer-figma.svg" },
  ],
  
  // App Download
  appDownload: [
    { url: "https://framerusercontent.com/images/ZxdeWf4omrmHGc3jkp3QLgAXgWk.svg", name: "app-google-play.svg" },
    { url: "https://framerusercontent.com/images/OIvgUf5MAEDmH9JKj6dYnbmywVQ.svg", name: "app-app-store.svg" },
  ],
  
  // General Icons (kalan görseller)
  icons: [
    { url: "https://framerusercontent.com/images/oBaa6E1AbNi6KJdlT3FXo3F1ziA.svg", name: "icon-arrow-right.svg" },
    { url: "https://framerusercontent.com/images/NW2JGFe4Nh0cU1jO22e4BC25rA.svg", name: "icon-arrow-left.svg" },
    { url: "https://framerusercontent.com/images/ng06zKCk2uqARFVJ6TSaHzWDLQ.svg", name: "icon-check.svg" },
    { url: "https://framerusercontent.com/images/l2aCspFuG5TjpBMBsqEjYTb5aY.svg", name: "icon-star.svg" },
    { url: "https://framerusercontent.com/images/exiLYvVlPgzgABuuBYkr34thw.svg", name: "icon-calendar.svg" },
    { url: "https://framerusercontent.com/images/BMRYuzWvYw2fu3kCb4RhTcKMrxg.svg", name: "icon-bell.svg" },
    { url: "https://framerusercontent.com/images/FGFN1xS7CIsVJdrczWL09Osf3DU.svg", name: "icon-file.svg" },
    { url: "https://framerusercontent.com/images/bw6pEFyomjYJNKJwK2IlVL7HWGk.svg", name: "icon-folder.svg" },
    { url: "https://framerusercontent.com/images/itUvExmxEkZbeggztDscYDj40.svg", name: "icon-user.svg" },
    { url: "https://framerusercontent.com/images/FUrX0r1JSVgIHIysZykC7kLWi8.svg", name: "icon-team.svg" },
    { url: "https://framerusercontent.com/images/Nc3THb9rm2Vozv0ADpCiuKcWKw.svg", name: "icon-chart.svg" },
    { url: "https://framerusercontent.com/images/tp4lSKjQYOmtC38b6xIOU2JvqWg.svg", name: "icon-settings.svg" },
    { url: "https://framerusercontent.com/images/DjlW5895TMsBKPT7kmd6AYDGpDA.svg", name: "icon-shield.svg" },
    { url: "https://framerusercontent.com/images/19b8bAYms2pYEye5dFTod5t6u0.svg", name: "icon-lock.svg" },
    { url: "https://framerusercontent.com/images/G0mwmWHV14UMbttlTM57rz3dh4A.svg", name: "icon-cloud.svg" },
    { url: "https://framerusercontent.com/images/1IARUjnJuY0puAOw3ONLkST3Bs.svg", name: "icon-sync.svg" },
    { url: "https://framerusercontent.com/images/bv0lTIA40JFbS0kILWHa2UDffU.svg", name: "icon-message.svg" },
    { url: "https://framerusercontent.com/images/8k5lPUoY99wDudDiCGMndXLqwPY.svg", name: "icon-chat.svg" },
    { url: "https://framerusercontent.com/images/KHjnHAf9nDCbHTMRBj5x1ErVDJI.svg", name: "icon-download.svg" },
    { url: "https://framerusercontent.com/images/Au3Vn3tWQZLIeNnIqH0yFJU5Uc.svg", name: "icon-upload.svg" },
    { url: "https://framerusercontent.com/images/yvYzXvD9CVemLe9IMQ0iOqvPc.svg", name: "icon-share.svg" },
    { url: "https://framerusercontent.com/images/UKWe1M3DGuiXrecxkVRx6knsYo.svg", name: "icon-link.svg" },
    { url: "https://framerusercontent.com/images/tS2JvXDXyr8CUhthUxLyCbD7cs.svg", name: "icon-grid.svg" },
    { url: "https://framerusercontent.com/images/hk21VWZrxkkqQvwa0rq5fPTw.svg", name: "icon-list.svg" },
    { url: "https://framerusercontent.com/images/YTF55yppXsjZcfwZdIhgPkHk.svg", name: "icon-filter.svg" },
    { url: "https://framerusercontent.com/images/idoyg9LgMXKhwic6VkTp9PfUZ0I.svg", name: "icon-search.svg" },
    { url: "https://framerusercontent.com/images/eZDxLPSloaxlUvuDbZ0bXpNCUfM.svg", name: "icon-plus.svg" },
    { url: "https://framerusercontent.com/images/gbN7riDkquH9CszveJoEasjuA.svg", name: "icon-minus.svg" },
    { url: "https://framerusercontent.com/images/00kfKY2Am5IPVpd7kvwZjiMk.svg", name: "icon-edit.svg" },
    { url: "https://framerusercontent.com/images/VtgK6dxuoYF2n77rQTMpHmm17E.svg", name: "icon-delete.svg" },
    { url: "https://framerusercontent.com/images/UUscSe5d3nxoe633ZSh6dEQ3QOs.svg", name: "icon-save.svg" },
    { url: "https://framerusercontent.com/images/yW74CB7gWLnx48LLy1dd7HWwqTs.svg", name: "icon-close.svg" },
    { url: "https://framerusercontent.com/images/WEL0UouYHdGaCWj5MQYD7bXkU.svg", name: "icon-menu.svg" },
    { url: "https://framerusercontent.com/images/eKKifib5yPfkOWtZ18ETiw4IQ.svg", name: "icon-home.svg" },
    { url: "https://framerusercontent.com/images/pHL5eMJGZKZdb2ePWlKL181tH0.svg", name: "icon-info.svg" },
    { url: "https://framerusercontent.com/images/8QYfbcSf91GpqEZNHBhW0kwgY4.svg", name: "icon-help.svg" },
    { url: "https://framerusercontent.com/images/4F3BfpzSlM1ncEiFcKbCMDqKAwo.svg", name: "icon-question.svg" },
    { url: "https://framerusercontent.com/images/RsxReX9lurwK6xOnnjRxS9QRBKo.svg", name: "icon-warning.svg" },
    { url: "https://framerusercontent.com/images/wubpxMUinoM06EnknGNZ06YmRk.svg", name: "icon-success.svg" },
    { url: "https://framerusercontent.com/images/rdCUbJ2zkhdg8DLwInQlcCga6fQ.svg", name: "icon-error.svg" },
    { url: "https://framerusercontent.com/images/5U7MxmBlxK64K7FDSKLcmXOXi8.svg", name: "icon-time.svg" },
    { url: "https://framerusercontent.com/images/t67ndh4M1munDemuwtyC8hHGM.svg", name: "icon-date.svg" },
    { url: "https://framerusercontent.com/images/eiQrQF7SxSeC1Ocpcpz2LbtlH0.svg", name: "icon-clock.svg" },
    { url: "https://framerusercontent.com/images/iKHXdTLR162H4E1AVMdKCRgY8w.svg", name: "icon-timer.svg" },
    { url: "https://framerusercontent.com/images/yrWN3Pr3PScrFqeFTJIrgIDIj0.svg", name: "icon-play.svg" },
    { url: "https://framerusercontent.com/images/BmKFLxT22OvsiSEnrTX6F8W7o.svg", name: "icon-pause.svg" },
    { url: "https://framerusercontent.com/images/nWoXFlACic3M5Vdj82pjiyk1698.svg", name: "icon-stop.svg" },
    { url: "https://framerusercontent.com/images/0IM5CZrHPjymIMt0M4hQfVmharg.svg", name: "icon-refresh.svg" },
    { url: "https://framerusercontent.com/images/GCxi3eHMA3Z5wfaItTI3E1giD0.svg", name: "icon-reload.svg" },
    { url: "https://framerusercontent.com/images/hcyHdOjIei9TUFdxHvTSbO4Eak.svg", name: "icon-back.svg" },
    { url: "https://framerusercontent.com/images/YCamMTWQRRNTMfiBSRZ5yeO5B4.svg", name: "icon-forward.svg" },
    { url: "https://framerusercontent.com/images/K1hhzLhojtlgOUmVVSjqqvTmcM.svg", name: "icon-next.svg" },
    { url: "https://framerusercontent.com/images/bdwqjzSccXM7RvpxxUElvBlpBb8.svg", name: "icon-previous.svg" },
    { url: "https://framerusercontent.com/images/piqzkXgNLnSCxVyvLbBbJrC7EI.svg", name: "icon-first.svg" },
    { url: "https://framerusercontent.com/images/Xzaj8EwBbMpj86kH5Aitpeptk.svg", name: "icon-last.svg" },
    { url: "https://framerusercontent.com/images/lOfmxYkjBOtKq4GryxOIcTtrIoU.svg", name: "icon-up.svg" },
    { url: "https://framerusercontent.com/images/OjeACn6Mo0Oue29CItF43GzAqX8.svg", name: "icon-down.svg" },
    { url: "https://framerusercontent.com/images/UIariEEg5CoEnGCiee0vm3NuHok.svg", name: "icon-left.svg" },
    { url: "https://framerusercontent.com/images/iSzZUxBBeY9QBxR201NsFYETZeE.svg", name: "icon-right.svg" },
    { url: "https://framerusercontent.com/images/CCYliR0zPJiJGPPkI19D9uuZzSI.svg", name: "icon-expand.svg" },
    { url: "https://framerusercontent.com/images/ngz9mWDIL3vaZJS6mulw9xiRx0w.svg", name: "icon-collapse.svg" },
    { url: "https://framerusercontent.com/images/XPRxJbS3HpZLlg2VBODFjasfQ.svg", name: "icon-maximize.svg" },
    { url: "https://framerusercontent.com/images/P3eRrGqcEJtYBJHuEKVhDVF2zS0.svg", name: "icon-minimize.svg" },
    { url: "https://framerusercontent.com/images/OdgITmDga8Ps1sDaVtt777NwH0.svg", name: "icon-fullscreen.svg" },
    { url: "https://framerusercontent.com/images/7qMixXPu7IFxmdWqv8fcKIp63Hc.svg", name: "icon-exit-fullscreen.svg" },
    { url: "https://framerusercontent.com/images/W1a21GXS72NvyPKxP6KAjgP124.svg", name: "icon-zoom-in.svg" },
    { url: "https://framerusercontent.com/images/El4hAFRPn15kOEMCo3O4jJhY.svg", name: "icon-zoom-out.svg" },
    { url: "https://framerusercontent.com/images/MiFULo8BYTtefsQLRdXkwq1G6z8.svg", name: "icon-fit.svg" },
    { url: "https://framerusercontent.com/images/JxvvGQkd8QDPhMQ8pQGHBXw79c.svg", name: "icon-crop.svg" },
    { url: "https://framerusercontent.com/images/pvB3Y2VgCHu6NrYGuYMJJjAv0.svg", name: "icon-rotate.svg" },
    { url: "https://framerusercontent.com/images/JMutiBrOfgMDMaa7d7oYbv5qOew.svg", name: "icon-flip.svg" },
    { url: "https://framerusercontent.com/images/HfwCS1omgGaRmeWxaBcOK0sWxA.svg", name: "icon-mirror.svg" },
    { url: "https://framerusercontent.com/images/29lGNZAYqGsflZn22HIYhmistbo.svg", name: "icon-brightness.svg" },
    { url: "https://framerusercontent.com/images/U11SbsIRwmIrcWNt6ATmYeT44k.svg", name: "icon-contrast.svg" },
    { url: "https://framerusercontent.com/images/IRinzNp4ZDfiDwjX9XhLPk2uHfg.svg", name: "icon-saturation.svg" },
    { url: "https://framerusercontent.com/images/fOJmgDpMBSIibjxgGFYDRMY2ZE.svg", name: "icon-hue.svg" },
    { url: "https://framerusercontent.com/images/r4DnLhZAghjfmz0MuDfbvILLN8.svg", name: "icon-blur.svg" },
    { url: "https://framerusercontent.com/images/zo9iTuB4UATZrZDiibIADOc7jnk.svg", name: "icon-sharpen.svg" },
    { url: "https://framerusercontent.com/images/taWEKxvinRCnqF7ON3mXhJIo8.svg", name: "icon-filter-apply.svg" },
    { url: "https://framerusercontent.com/images/EBDd69zCVpJJudPiSFmIplmSqgU.svg", name: "icon-filter-remove.svg" },
    { url: "https://framerusercontent.com/images/d0NgaSvJurZM32wLWVg2c3zLR08.svg", name: "icon-undo.svg" },
    { url: "https://framerusercontent.com/images/NhcXvfKhirwWcuA6jwvRMxpZzc.svg", name: "icon-redo.svg" },
    { url: "https://framerusercontent.com/images/vvbW2L2gJCn5Zljd76qfC0zBJE.svg", name: "icon-history.svg" },
    { url: "https://framerusercontent.com/images/dsksamnA7KFaVMQFQFI0Ctccj4A.svg", name: "icon-timeline.svg" },
    { url: "https://framerusercontent.com/images/r6IxRz29Qjdp77Jik9HUj32Vggc.svg", name: "icon-calendar-view.svg" },
    { url: "https://framerusercontent.com/images/XWabFZOmjNbpc47YyzXx7BsMgY.svg", name: "icon-list-view.svg" },
    { url: "https://framerusercontent.com/images/VloXtcYHK4vNmd4sBozPxhD6f88.svg", name: "icon-grid-view.svg" },
    { url: "https://framerusercontent.com/images/sydqODIJIvMuojPJV8JPdXaMEwM.svg", name: "icon-kanban.svg" },
    { url: "https://framerusercontent.com/images/JgJB7e5yFJ4KAnXf31B1EhhwIdE.svg", name: "icon-gantt.svg" },
    { url: "https://framerusercontent.com/images/SsG3q6UfJFsS9Fmd8JXIri6klJU.svg", name: "icon-timeline-view.svg" },
    { url: "https://framerusercontent.com/images/Dlp8qnwjKZudlV2ihjovmJ0vg.svg", name: "icon-board.svg" },
    { url: "https://framerusercontent.com/images/h5vrJdDq0UMdeafviKZ9Mz1EqZk.svg", name: "icon-card.svg" },
    { url: "https://framerusercontent.com/images/KtOBf6Zt75qz2afRIFu2ME1oylM.svg", name: "icon-table.svg" },
    { url: "https://framerusercontent.com/images/GtHE4eSsks1mGRjW6tCeQR0Mk.svg", name: "icon-column.svg" },
    { url: "https://framerusercontent.com/images/YJ25m3XI3uQwU9F3aOVJkfYZHaM.svg", name: "icon-row.svg" },
    { url: "https://framerusercontent.com/images/Ug5QBbgSJS7uTL89lpi4mG1Ak.svg", name: "icon-cell.svg" },
    { url: "https://framerusercontent.com/images/rVrcKuXhInQGHqM6cRFTwkkMVeI.svg", name: "icon-header.svg" },
    { url: "https://framerusercontent.com/images/5BTDpX3z5Hu8bzfaOnWYFX6hviQ.svg", name: "icon-footer.svg" },
    { url: "https://framerusercontent.com/images/07fYTACaHtlqcWT5hWdMsIyKjw.svg", name: "icon-section.svg" },
    { url: "https://framerusercontent.com/images/7ERE4Rtrn3orNesa6ABhdGit8N4.svg", name: "icon-divider.svg" },
    { url: "https://framerusercontent.com/images/vXGVg58nevHIvlO0gulFN3JUWT0.svg", name: "icon-spacer.svg" },
    { url: "https://framerusercontent.com/images/OOaannk9N0L0pooRfBQ04ISOI8.svg", name: "icon-margin.svg" },
    { url: "https://framerusercontent.com/images/SG4uTp4cw9jcIqyGdWjP6VL6UhU.svg", name: "icon-padding.svg" },
    { url: "https://framerusercontent.com/images/do3UmsuGu8wPsV2wlM540byT5c.svg", name: "icon-border.svg" },
    { url: "https://framerusercontent.com/images/9iicDNeprBWekqhUw6o9VtmTI.svg", name: "icon-radius.svg" },
    { url: "https://framerusercontent.com/images/Czf8gEAwGiNxtXQSLZRZTXxU9Ag.svg", name: "icon-shadow.svg" },
    { url: "https://framerusercontent.com/images/1ihgSDc4Izeqxops2cUyCico.svg", name: "icon-gradient.svg" },
    { url: "https://framerusercontent.com/images/DHHObdUT4tsaEobs2NAWi7UAfUU.svg", name: "icon-pattern.svg" },
    { url: "https://framerusercontent.com/images/GEgBpwiPMrP2cuOJGrgsgKb6Aac.svg", name: "icon-texture.svg" },
    { url: "https://framerusercontent.com/images/soHh1zzD8MJCTWMIB0Fv943LWs.svg", name: "icon-overlay.svg" },
    { url: "https://framerusercontent.com/images/vkxu5hRLziMf35TXBASYZ8Y1FY.svg", name: "icon-mask.svg" },
    { url: "https://framerusercontent.com/images/5VVlgBbxmPgBbamfbWTwI92LA.svg", name: "icon-clip.svg" },
    { url: "https://framerusercontent.com/images/l0tTehfNifbGPxk7buf4vuq7omQ.svg", name: "icon-crop-circle.svg" },
    { url: "https://framerusercontent.com/images/PsG5CdKnrQ1F0iWYH9G5WDQGl8c.svg", name: "icon-crop-square.svg" },
    { url: "https://framerusercontent.com/images/dfvyvPYN7prETlAmDSjySTg.svg", name: "icon-crop-free.svg" },
    { url: "https://framerusercontent.com/images/xdsWzAUH5uc39uCdcR1hGa9a5k.svg", name: "icon-crop-ratio.svg" },
    { url: "https://framerusercontent.com/images/F5m7KtGplLZFcXHVEbaZRIn5vk.svg", name: "icon-align-left.svg" },
    { url: "https://framerusercontent.com/images/4KYQNU5Iuog4b3ZkOtOECiZd9Cw.svg", name: "icon-align-center.svg" },
    { url: "https://framerusercontent.com/images/HZpRTCKYtutqIyHlDiLjlScmTXk.svg", name: "icon-align-right.svg" },
    { url: "https://framerusercontent.com/images/uDjlbsGIcpdO6C5Spe0a2bN26kc.svg", name: "icon-align-justify.svg" },
    { url: "https://framerusercontent.com/images/FkgxdfDwDS8PObwdmAaWC03fOCM.svg", name: "icon-align-top.svg" },
    { url: "https://framerusercontent.com/images/wPSena2RyS2NVh6RzWOPv6jYgmc.svg", name: "icon-align-middle.svg" },
    { url: "https://framerusercontent.com/images/jQdDCyUq6pgbWXDu1ChPGo9a0so.svg", name: "icon-align-bottom.svg" },
    { url: "https://framerusercontent.com/images/hJaNIgUmZAKIcc73n87cCKPrKu8.svg", name: "icon-distribute-horizontal.svg" },
    { url: "https://framerusercontent.com/images/MaO7Yhpw5nPK52NXnnCnD86EAkM.svg", name: "icon-distribute-vertical.svg" },
    { url: "https://framerusercontent.com/images/XCNHFN1bGzoLZJSIsQBn4cqJqRo.svg", name: "icon-stack-horizontal.svg" },
    { url: "https://framerusercontent.com/images/zhQNbqQghWRyeRlqxfNJvXI89zo.svg", name: "icon-stack-vertical.svg" },
    { url: "https://framerusercontent.com/images/SX6GGQk6EapKeEJ1Av0Wqu4qng.svg", name: "icon-group.svg" },
    { url: "https://framerusercontent.com/images/cr4kMMxtJy5VOl5uRTDN9hEKeYA.svg", name: "icon-ungroup.svg" },
    { url: "https://framerusercontent.com/images/D7Y23ag4s0CzJugxAzxKwcCqrb4.svg", name: "icon-lock-object.svg" },
  ],
  
  // Background Images & Decorative
  backgrounds: [
    { url: "https://framerusercontent.com/images/NeeeqSagObDG4FU6BvY3vw4Gw.png", name: "bg-pattern-1.png" },
    { url: "https://framerusercontent.com/images/czofpZZGkqkn3CC2oLdJdIIzZ6g.png", name: "bg-pattern-2.png" },
    { url: "https://framerusercontent.com/images/UaytiUngQhdXyQOLDOVXd7AKAUA.png", name: "bg-gradient-1.png" },
    { url: "https://framerusercontent.com/images/fjnSDxcIVGBnmYaDNyBHN0OhW0.png", name: "bg-gradient-2.png" },
    { url: "https://framerusercontent.com/images/7Zqv99xZhhKBuYrk6V4uN36cu0.png", name: "bg-texture-1.png" },
    { url: "https://framerusercontent.com/images/M2q0zZLO7xFaoatG1gxt5DQL9rY.png", name: "bg-texture-2.png" },
    { url: "https://framerusercontent.com/images/HXa7bbNvH8M24t6hivBifcK3ZHE.png", name: "bg-noise-1.png" },
    { url: "https://framerusercontent.com/images/GTfpxW7ODtfUQNVZggvQS5CVJ0.png", name: "bg-noise-2.png" },
    { url: "https://framerusercontent.com/images/FOPUanQTifYzmOnBh5CiuPBVU7w.png", name: "bg-overlay-1.png" },
    { url: "https://framerusercontent.com/images/vz04nRcNzpu3VodK5xrGBNY1Sms.png", name: "bg-overlay-2.png" },
    { url: "https://framerusercontent.com/images/2KXPF7hBaZ2eKxfAdmJe4Ty8aM.png", name: "bg-blur-1.png" },
    { url: "https://framerusercontent.com/images/zVQuKAMGkUL4V2dLzg5I2i4kIkI.png", name: "bg-blur-2.png" },
    { url: "https://framerusercontent.com/images/UdbSOIPUnLLiZpgmzQxBc26MqI.png", name: "bg-shape-1.png" },
    { url: "https://framerusercontent.com/images/FY5ztGNRP9xoe185CDIYvOSpGA.png", name: "bg-shape-2.png" },
    { url: "https://framerusercontent.com/images/JuG2ZtC8TzTnwz7R1XRsodoGuc.png", name: "bg-decoration-1.png" },
    { url: "https://framerusercontent.com/images/dzcaLyFgX1pDuEYkAsa9Kbl0NI.png", name: "bg-decoration-2.png" },
    { url: "https://framerusercontent.com/images/1PB0lpgl0Xo09UVWxqbMA0n61mM.png", name: "bg-decoration-3.png" },
    { url: "https://framerusercontent.com/images/x79JW3GCjVRTS2cUzMvDwBBRitQ.png", name: "bg-decoration-4.png" },
    { url: "https://framerusercontent.com/images/Eo0q3PqzkxRlZvJebbxVQsd6nLc.png", name: "bg-decoration-5.png" },
    { url: "https://framerusercontent.com/images/9onbfn31UMA9wWGY9sEIW6XSE.png", name: "bg-decoration-6.png" },
    { url: "https://framerusercontent.com/images/TBQo01wWgwCYGNWfhlTmwDkrg.png", name: "bg-decoration-7.png" },
    { url: "https://framerusercontent.com/images/iejGQWHIvzOq50tgz7r38qFrrA.png", name: "bg-decoration-8.png" },
    { url: "https://framerusercontent.com/images/1DGRRegnDNTh6hHjIMXBztqiVA.png", name: "bg-decoration-9.png" },
    { url: "https://framerusercontent.com/images/2TmrBYEG6GV34UKNa2APcYWLOxU.png", name: "bg-decoration-10.png" },
    { url: "https://framerusercontent.com/images/Sp87xPdSWc4l9jen5Mtj6vDLvM.png", name: "bg-decoration-11.png" },
  ],
};

// Tüm görselleri birleştir
const allImages = [];
Object.keys(imageCategories).forEach(category => {
  imageCategories[category].forEach(img => {
    allImages.push({
      ...img,
      category: category
    });
  });
});

// Public klasörü yapısını oluştur
const baseDir = path.join(__dirname, 'public', 'sap-images');

// Kategori klasörlerini oluştur
Object.keys(imageCategories).forEach(category => {
  const categoryDir = path.join(baseDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
});

// Görsel indirme fonksiyonu
function downloadImage(imageData) {
  return new Promise((resolve, reject) => {
    const { url, name, category } = imageData;
    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    
    const categoryDir = path.join(baseDir, category);
    const filePath = path.join(categoryDir, name);
    
    // Dosya zaten varsa atla
    if (fs.existsSync(filePath)) {
      console.log(`✓ Zaten var: ${category}/${name}`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Redirect takibi
        return downloadImage({ ...imageData, url: response.headers.location })
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ İndirildi: ${category}/${name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// Tüm görselleri indir
async function downloadAllImages() {
  console.log(`\n📦 SAP Sitesi Görselleri İndiriliyor...\n`);
  console.log(`Toplam ${allImages.length} görsel, ${Object.keys(imageCategories).length} kategori\n`);
  
  // Kategori bazında istatistik
  Object.keys(imageCategories).forEach(category => {
    console.log(`  📁 ${category}: ${imageCategories[category].length} görsel`);
  });
  
  console.log(`\n${'='.repeat(50)}\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < allImages.length; i++) {
    const imageData = allImages[i];
    
    try {
      await downloadImage(imageData);
      successCount++;
    } catch (error) {
      console.error(`✗ Hata (${imageData.category}/${imageData.name}):`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`\n✅ İndirme tamamlandı!`);
  console.log(`   ✓ Başarılı: ${successCount}`);
  console.log(`   ✗ Hatalı: ${errorCount}`);
  console.log(`\n📂 Görseller: ${baseDir}`);
  console.log(`\n📋 Kategori yapısı:`);
  Object.keys(imageCategories).forEach(category => {
    console.log(`   📁 ${category}/`);
  });
}

// Çalıştır
downloadAllImages().catch(console.error);