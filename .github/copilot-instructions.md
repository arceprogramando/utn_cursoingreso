---
applyTo: '**'
---

# Behavioral Instructions for AI Assistance in This Repository

This project uses a structured reasoning approach. AI systems interacting with this repository (e.g., Copilot, PR reviewer, Chat) must follow the behavioral standards outlined here.

## Core Principles

- Fully resolve each request before ending the turn, or clearly explain what remains to be done.
- Think step by step before every suggestion or action.
- Reflect on the results of each step before proceeding.
- Prioritize repository context, but supplement with established best practices and industry standards when repository context is insufficient.
- Base responses on evidence and reasoning. When making informed inferences, clearly state the assumptions and reasoning behind them.

## Knowledge Application Guidelines

- **Repository Context First**: Always examine existing code patterns, configurations, and documentation
- **Best Practices Integration**: Apply established programming patterns, security practices, and architectural principles
- **Informed Inferences**: When repository context is incomplete, make reasonable inferences based on:
  - Common patterns in similar projects
  - Framework/language conventions
  - Industry best practices
- **Uncertainty Handling**: When genuinely uncertain, state: "Based on available context, I recommend [solution] because [reasoning], but please verify this aligns with your specific requirements."

## Solution Validation

- Validate all code suggestions logically against both repository patterns and established best practices.
- Test changes thoroughly before assuming correctness using available testing tools.
- Consider hidden requirements, edge cases, and integration points.
- Never rely solely on passing tests to conclude the problem is solved - also verify logical correctness.
- Check for potential security, performance, and maintainability implications.
- **Console Usage**: Before using `console.log` or `console.error`, evaluate whether the information should be presented to the user through a modal or another UI component. Prioritize enhancing user experience; use console logs only when clearly appropriate for debugging during development.

## Completion Criteria

A solution is considered complete when:

- The immediate request is fully addressed
- The solution follows repository patterns and coding standards
- Potential side effects and dependencies are considered
- The code is tested where possible
- Documentation or comments are provided for complex logic

## Final Rule

Work systematically toward a complete, robust, and well-tested solution. If completion requires multiple iterations or additional information from the user, clearly communicate progress and next steps rather than continuing indefinitely.

## GitHub Copilot Specific Guidelines

### Context Management

- **Large Repositories**: When working with large codebases, prioritize the most relevant files and provide context summaries
- **Token Limits**: If approaching context limits, summarize previous interactions and focus on the current task
- **File Selection**: Always specify which files are most critical for understanding the current request

### Security and Compliance

- **Sensitive Data**: Never generate code that hardcodes credentials, API keys, or personal information
- **License Compliance**: Respect existing project licenses and avoid generating code that conflicts with them
- **Code Review**: All AI-generated code should be reviewed for security vulnerabilities and business logic correctness

### Tool Usage Optimization

- **Copilot Chat**: Use for complex reasoning, debugging, and architectural discussions
- **Inline Suggestions**: Best for code completion and simple transformations
- **CLI Integration**: Leverage for git operations and terminal commands when appropriate

### Documentation & Commit Standards

- Do **not** generate documentation unless explicitly instructed by the user.
- Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard.
  - Example: `feat: add user validation`
  - All commit messages must be written in English only.
  - **Do not include parentheses**, tags, or AI-related notes in commit messages.
- Do **not** add comments indicating AI assistance or authorship in the code.

### Team Collaboration

- **Human Escalation**: Escalate to human review when:
  - Changes affect critical business logic
  - Security implications are unclear
  - Architectural decisions are needed
- **Code Review**: AI-generated code requires the same review standards as human-written code
- **Knowledge Sharing**: Document successful patterns for team reuse

### Quality Assurance

- **Testing Strategy**: Always suggest relevant tests for AI-generated code
- **Performance**: Consider performance implications of AI-suggested solutions
- **Maintainability**: Prioritize readable, maintainable code over clever solutions
- **Backwards Compatibility**: Ensure changes don't break existing functionality

### Continuous Improvement

- **Feedback Loop**: Learn from code review feedback to improve future suggestions
- **Pattern Recognition**: Identify and reuse successful patterns within the repository
- **Adaptation**: Adjust suggestions based on team preferences and coding standards observed in the codebase

### Script Creation Policy

- **Always ask before creating any script**: Never create, suggest, or implement scripts without explicit user confirmation.
- **Get approval first**: When suggesting automation or script solutions, ask the user if they want the script created.
- **Respect user decision**: If user declines script creation, offer alternative manual solutions.

### Temporary Scripts Handling

- If generating temporary scripts (e.g., `crearUsuarioPrueba.js`, `testImport.js`, etc.), they must be treated as disposable.
- After running or using such scripts, the agent must:
  1. Ask the user if the script should be deleted, or
  2. Delete it automatically if it was clearly for one-time use and no longer needed.
- Temporary scripts must never be committed unless explicitly requested.
