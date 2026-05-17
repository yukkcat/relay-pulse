module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'perf', 'revert',
      'chore', 'refactor', 'build',
      'docs', 'test', 'ci', 'style'
    ]],
    // 中文项目允许 subject 大小写混用（含中文、PascalCase 标识符如 Linear/Controls）
    'subject-case': [0],
  }
};
