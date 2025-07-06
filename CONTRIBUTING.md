# Contributing to OffSec Radar

Thank you for your interest in contributing to OffSec Radar! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, please include:

- **Clear and descriptive title**
- **Steps to reproduce the problem**
- **Expected behavior**
- **Actual behavior**
- **Environment details** (OS, browser, etc.)
- **Screenshots** (if applicable)

### Suggesting Enhancements

We welcome feature requests! When suggesting enhancements:

- **Describe the problem** you're trying to solve
- **Explain why** this feature would be useful
- **Provide examples** of how it would work
- **Consider the impact** on the community

### Code Contributions

#### Getting Started

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test your changes**
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

#### Development Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/offsec-radar.git
   cd offsec-radar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```

#### Code Style Guidelines

- **JavaScript/React**: Follow ESLint configuration
- **CSS**: Use Tailwind CSS classes when possible
- **Components**: Use functional components with hooks
- **Naming**: Use descriptive names for variables and functions
- **Comments**: Add comments for complex logic

#### Commit Message Format

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(api): add GitHub API integration
fix(ui): resolve search filter bug
docs(readme): update installation instructions
```

## 🎯 Areas We Need Help

### High Priority
- **GitHub API Integration**: Implement real GitHub data fetching
- **Search Functionality**: Improve search algorithms
- **Tool Discovery**: Enhance tool discovery algorithms
- **UI/UX Improvements**: Enhance user experience

### Medium Priority
- **Testing**: Add comprehensive test coverage
- **Documentation**: Improve API documentation
- **Performance**: Optimize application performance
- **Accessibility**: Improve accessibility features

### Low Priority
- **Mobile App**: React Native mobile application
- **Advanced Features**: Advanced filtering and comparison
- **Community Features**: User profiles and reviews

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment**:
   - Operating System
   - Browser (if applicable)
   - Node.js version
   - npm version

2. **Steps to Reproduce**:
   - Clear, step-by-step instructions
   - Expected vs actual behavior

3. **Additional Information**:
   - Screenshots or screen recordings
   - Console errors
   - Network tab information

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] No console errors
- [ ] Responsive design works on mobile

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Cross-browser testing (if applicable)

## Screenshots
Add screenshots if UI changes were made

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have made corresponding changes to documentation
- [ ] My changes generate no new warnings
```

## 🏷️ Labels

We use labels to categorize issues and pull requests:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `invalid`: Something doesn't seem right
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 📞 Getting Help

- **Discussions**: [GitHub Discussions](https://github.com/yourusername/offsec-radar/discussions)
- **Issues**: [GitHub Issues](https://github.com/yourusername/offsec-radar/issues)
- **Discord**: [Join our Discord](https://discord.gg/offsec-radar)

## 🙏 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributor hall of fame

Thank you for contributing to OffSec Radar! 🚀 