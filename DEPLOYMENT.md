# StudiKompas Deployment Guide

## Quick Start

### Prerequisites

- Node.js 16+ and pnpm
- Neon PostgreSQL database account
- Vercel account (for deployment)
- Better Auth Secret (generate with `openssl rand -base64 32`)

### Local Development Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Set environment variables
# Add to .env.local:
# DATABASE_URL=postgresql://[user]:[password]@[host]/[database]
# BETTER_AUTH_SECRET=[generate with: openssl rand -base64 32]

# 3. Create database tables
# Tables are created via Neon MCP integration in v0
# Run seed script to populate initial data:
# pnpm exec ts-node scripts/seed-db.ts

# 4. Start development server
pnpm dev

# 5. Open http://localhost:3000
```

## Environment Variables

Required environment variables:

```
DATABASE_URL              # Neon PostgreSQL connection string
BETTER_AUTH_SECRET        # 32+ character random string for session signing
BETTER_AUTH_URL          # Optional: Full URL including protocol for custom domains
```

Optional environment variables:

```
NODE_ENV                  # development | production
NEXT_PUBLIC_API_URL      # Public API URL (defaults to current domain)
```

## Database Setup

### Schema Management

Tables are managed through the Neon MCP. All schema changes should be made through:

1. The Neon dashboard
2. SQL migration scripts
3. Drizzle schema definitions

### Initial Data

To populate initial data:

```bash
pnpm exec ts-node scripts/seed-db.ts
```

This creates:
- 6 sample universities
- 6 sample programs
- Sample user data (can be customized)

## Vercel Deployment

### 1. Connect GitHub Repository

```bash
# Push to GitHub
git remote add origin https://github.com/yourusername/studikompas.git
git branch -M main
git push -u origin main
```

### 2. Create Vercel Project

```bash
# Option 1: Via Vercel CLI
pnpm dlx vercel

# Option 2: Via web dashboard
# 1. Visit https://vercel.com
# 2. Click "New Project"
# 3. Select GitHub repository
# 4. Configure project
```

### 3. Set Environment Variables

In Vercel Dashboard:

```
Settings → Environment Variables

DATABASE_URL              [Neon connection string]
BETTER_AUTH_SECRET        [32+ character secret]
BETTER_AUTH_URL          [https://your-domain.vercel.app]
```

### 4. Deploy

```bash
pnpm dlx vercel --prod
```

Or use Vercel Dashboard automatic deployments from main branch.

## Production Considerations

### Security Checklist

- [ ] BETTER_AUTH_SECRET is strong (32+ characters)
- [ ] DATABASE_URL uses TLS connection
- [ ] Environment variables are not committed to git
- [ ] Rate limiting is configured (future)
- [ ] CORS is properly configured
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention (using parameterized queries)
- [ ] Password hashing is enabled (Better Auth default)
- [ ] Session cookies are secure (httpOnly, secure, sameSite)

### Performance Optimization

```bash
# Build optimization
pnpm build

# Analyze bundle size
pnpm dlx next/analyze

# Enable React Compiler (Next.js 16)
# Set in next.config.mjs:
# reactCompiler: true
```

### Database Optimization

- [ ] Indexes created on frequently queried columns
- [ ] Connection pooling configured
- [ ] Query performance monitored
- [ ] Backup strategy in place
- [ ] Disaster recovery plan documented

### Monitoring & Logging

Set up monitoring for:

- [ ] Application errors
- [ ] Database performance
- [ ] API response times
- [ ] User activity logs
- [ ] Authentication failures

Recommended tools:
- **Error tracking**: Sentry
- **Analytics**: PostHog or Mixpanel
- **Monitoring**: Datadog or New Relic
- **Logging**: LogRocket or Loggly

## Scaling Considerations

### Horizontal Scaling

- Vercel handles automatic scaling
- Database connection pooling for multiple instances
- Static content cached globally

### Database Scaling

- Monitor connection limits
- Implement query caching (Redis future enhancement)
- Archive old data periodically
- Index optimization

### Performance Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **API response time**: < 200ms average

## Rollback Procedure

### If Deployment Goes Wrong

```bash
# View deployment history
pnpm dlx vercel ls

# Rollback to previous deployment
pnpm dlx vercel rollback [deployment-id]

# Or redeploy previous commit
git revert HEAD
git push
```

## Maintenance

### Regular Tasks

**Daily:**
- Monitor error rates
- Check database connections
- Review user feedback

**Weekly:**
- Performance analysis
- Security audit logs
- Backup verification

**Monthly:**
- Dependency updates
- Security patches
- Database maintenance
- Cache cleanup

### Backup Strategy

```bash
# Neon provides automated backups
# To manually backup:
# 1. Use Neon dashboard
# 2. Export as SQL dump
# 3. Store in secure location
```

## Troubleshooting

### Common Issues

**"Database connection failed"**
```
- Check DATABASE_URL is correct
- Verify Neon database is running
- Check network connectivity
- Review Neon dashboard for issues
```

**"Better Auth Secret not set"**
```
- Generate secret: openssl rand -base64 32
- Add to environment variables
- Restart application
```

**"Out of memory"**
```
- Analyze bundle size
- Enable code splitting
- Review server logs
- Increase server resources if needed
```

**"Slow performance"**
```
- Check database query performance
- Review network waterfall
- Check server CPU/memory
- Enable caching
```

## Contact & Support

For deployment issues:
- Email: [support@studikompas.edu](mailto:support@studikompas.edu)
- GitHub Issues: Create detailed bug report
- Vercel Support: For infrastructure issues

---

Last Updated: July 2024
Next Review: October 2024
