# 贡献指南

欢迎为 Sinan 项目贡献代码！请遵循以下指南以确保贡献过程顺利。

## 开始之前

### 准备工作

1. **Fork 项目**
   - Fork 主项目到你的 GitHub 账户
   - 克隆你的 Fork 项目到本地
   ```bash
   git clone https://github.com/你的用户名/sinan-docs.git
   cd sinan-docs
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

3. **添加上游仓库**
   ```bash
   git remote add upstream https://github.com/原始仓库/sinan-docs.git
   git fetch upstream
   ```

### 工作流程

1. **同步最新代码**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **创建新分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **进行修改**
   - 编写代码
   - 进行测试
   - 本地验证

4. **提交更改**
   ```bash
   git add .
   git commit -m "feat: 添加新功能描述"
   ```

5. **推送分支**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**
   - 在 GitHub 上创建 PR
   - 填写 PR 模板
   - 等待代码审查

## 分支管理

### 分支命名规范

遵循以下分支命名规范：

- `main` - 主分支，稳定版本代码
- `develop` - 开发分支，最新开发代码
- `feature/xxx` - 功能分支，用于新功能开发
- `fix/xxx` - 修复分支，用于 bug 修复
- `hotfix/xxx` - 热修复分支，用于紧急修复生产环境问题
- `docs/xxx` - 文档分支，用于文档更新
- `refactor/xxx` - 重构分支，用于代码重构
- `test/xxx` - 测试分支，用于添加或修复测试
- `release/xxx` - 发布分支，用于准备新版本发布

### 分支策略

#### Git Flow 工作流

1. **主要分支**
   - `main`: 生产环境代码，只接受经过测试的稳定代码
   - `develop`: 开发分支，包含最新的开发进展

2. **支持分支**
   - **Feature 分支**
     - 从 `develop` 创建
     - 合并到 `develop`
     - 命名: `feature/功能名称`
     - 示例: `feature/user-authentication`

   - **Fix 分支**
     - 从 `develop` 创建
     - 合并到 `develop`
     - 命名: `fix/问题描述`
     - 示例: `fix/login-validation-error`

   - **Hotfix 分支**
     - 从 `main` 创建
     - 合并到 `main` 和 `develop`
     - 命名: `hotfix/紧急问题描述`
     - 示例: `hotfix/critical-security-patch`

   - **Release 分支**
     - 从 `develop` 创建
     - 合并到 `main` 和 `develop`
     - 命名: `release/版本号`
     - 示例: `release/1.2.0`

### 分支保护

- `main` 分支启用保护，禁止直接推送
- 所有更改必须通过 Pull Request 合并
- PR 必须通过代码审查才能合并
- PR 必须通过所有 CI/CD 检查

## 合并策略

### Pull Request 模板

1. **PR 标题**
   ```
   <类型>(<范围>): <简短描述>
   
   示例:
   feat(bookmark): 添加书签导入导出功能
   fix(auth): 修复用户登录验证问题
   docs(readme): 更新安装说明文档
   ```

2. **PR 描述模板**
   ```markdown
   ## 更改类型
   - [ ] 新功能 (feat)
   - [ ] Bug 修复 (fix)
   - [ ] 文档更新 (docs)
   - [ ] 代码重构 (refactor)
   - [ ] 性能优化 (perf)
   - [ ] 测试相关 (test)
   - [ ] 构建相关 (build)
   - [ ] CI 相关 (ci)
   
   ## 更改描述
   请详细描述本次更改的内容和原因
   
   ## 测试清单
   - [ ] 单元测试通过
   - [ ] 集成测试通过
   - [ ] 手动测试通过
   
   ## 相关 Issue
   Closes #issue编号
   ```

### 合并策略

1. **Squash and merge** (推荐)
   - 用于功能分支合并到 develop
   - 保持主分支历史简洁

2. **Create a merge commit**
   - 用于 release 分支合并到 main
   - 保留完整的开发历史

3. **Rebase and merge**
   - 用于简单的 bug 修复
   - 保持线性历史

### 代码审查要求

- 至少需要 1 位维护者审查批准
- 所有测试必须通过
- 所有自动化检查必须通过
- 代码覆盖率不能降低
- 无未解决的讨论

## 提交规范

### Commit Message 格式

遵循 Angular 规范的提交消息格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Type 类型

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 格式调整（不影响代码运行）
- `refactor`: 重构（既不是新功能也不是修复 bug）
- `perf`: 性能优化
- `test`: 添加或修复测试
- `build`: 构建系统或外部依赖的更改
- `ci`: CI 配置文件和脚本的更改
- `chore`: 其他不修改源代码或测试文件的更改
- `revert`: 恢复先前的提交

#### Scope 范围

说明影响的范围，例如：
- `bookmark`: 书签相关
- `auth`: 认证相关
- `api`: API 相关
- `ui`: 界面相关
- `docs`: 文档相关

#### Subject 主题

- 简短描述，不超过 50 个字符
- 使用现在时
- 不要大写第一个字母
- 结尾不加句号

#### 示例

```bash
# 新功能
git commit -m "feat(bookmark): 添加书签导入导出功能"

# Bug 修复
git commit -m "fix(auth): 修复 token 过期后的刷新逻辑"

# 文档更新
git commit -m "docs(readme): 更新安装指南说明"

# 重构
git commit -m "refactor(api): 重构 API 路由结构"

# 性能优化
git commit -m "perf(search): 优化搜索算法提高查询速度"
```

### 提交最佳实践

- 每个提交应该是一个独立的、可编译的更改
- 避免在一个提交中包含多个不相关的更改
- 提交消息应该清楚地描述更改的内容和原因
- 在提交前运行测试确保代码质量

## 代码规范

### 通用规范

1. **代码格式**
   - 使用项目配置的 ESLint/Prettier 规则
   - 运行 `npm run lint` 检查代码
   - 运行 `npm run format` 格式化代码

2. **命名规范**
   - 变量和函数使用 camelCase
   - 类名使用 PascalCase
   - 常量使用 UPPER_SNAKE_CASE
   - 文件名使用 kebab-case

3. **注释规范**
   - 为复杂逻辑添加清晰的注释
   - 使用 JSDoc 注释记录 API 和函数文档
   - 避免无意义的注释

4. **测试要求**
   - 所有新功能必须包含单元测试
   - 修复 bug 时必须添加相应的测试用例
   - 测试覆盖率应保持在 80% 以上


## 发布流程

1. **版本管理**
   - 遵循语义化版本 (Semantic Versioning)
   - 格式：`主版本号.次版本号.修订号`
   - 示例：`1.2.3`

2. **发布步骤**
   1. 从 develop 创建 release 分支
   2. 更新版本号和 CHANGELOG
   3. 进行最终测试
   4. 合并到 main 和 develop
   5. 在 main 上创建 tag
   6. 部署到生产环境

## 寻求帮助

如果你在贡献过程中遇到任何问题，可以通过以下方式寻求帮助：

1. 在 GitHub Issues 中提问
2. 在 Pull Request 中进行讨论
3. 联系项目维护者

## 行为准则

我们致力于提供一个友好、安全和包容的环境。请遵守以下准则：

- 尊重所有贡献者
- 建设性地提出批评和建议
- 接受不同的观点和经验
- 优雅地接受建设性批评

感谢你为 Sinan 项目做出贡献！