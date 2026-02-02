---
description: Security rules
---

# Security

## Basics
- No hardcoded API keys
- No `dangerouslySetInnerHTML` without sanitization
- No `eval()`

## Forms
- Validate with Zod
- Sanitize user input
- CSRF protection

## Images
- Alt text required
- No external URLs without validation
