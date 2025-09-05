# 部署 Sinan 站点

## 先决条件

在开始之前，请确保您已满足以下先决条件：

- Docker
- Docker Compose
- CPU 1核心 内存 2GB

## 部署步骤

1. 克隆项目到本地

```bash
git clone https://github.com/PeixyJ/sinan-quick-start
cd sinan-quick-start
```

2. 创建必需的配置文件 确保项目根目录下包含以下文件：
* sinan_dev.sql - 数据库初始化脚本
* application.yaml - Spring Boot 配置文件
* nginx.conf - Nginx 配置文件

3. 启动所有服务

**中国大陆用户（推荐）**:
```bash
docker-compose -f docker-compose-cn.yaml up -d
```

**海外用户或网络环境良好**:
```bash
docker-compose up -d
```

4. 查看服务状态
```bash
docker-compose ps
```

### 服务访问

- **前端应用**: `http://localhost`
- **后端API**: `http://localhost:8080`
- **MySQL数据库**: `localhost:3306`
- **Redis**: `localhost:6379`

### 环境变量配置

以下是 docker-compose.yml 中所有服务的环境变量配置说明：

#### sinan-server 服务环境变量

| 变量名 | 默认值 | 描述 | 是否必须 |
|--------|--------|------|----------|
| `SPRING_PROFILES_ACTIVE` | `prod` | Spring 运行环境配置 | 是 |
| `TZ` | `Asia/Shanghai` | 时区设置 | 否 |
| `DB_HOST` | `mysql` | MySQL 数据库主机地址 | 是 |
| `DB_PORT` | `3306` | MySQL 数据库端口 | 是 |
| `DB_NAME` | `sinan` | MySQL 数据库名称 | 是 |
| `DB_USERNAME` | `sinan` | MySQL 数据库用户名 | 是 |
| `DB_PASSWORD` | `sinan123` | MySQL 数据库密码 | 是 |
| `REDIS_HOST` | `redis` | Redis 主机地址 | 是 |
| `REDIS_PORT` | `6379` | Redis 端口 | 是 |
| `REDIS_PASSWORD` | _(空)_ | Redis 密码 | 否 |
| `REDIS_DATABASE` | `0` | Redis 数据库索引 | 否 |
| `LOG_LEVEL` | `INFO` | 日志级别 | 否 |
| `APP_LOG_LEVEL` | `INFO` | 应用日志级别 | 否 |
| `LOG_FILE_PATH` | `/app/logs/sinan-server.log` | 日志文件路径 | 否 |
| `GITHUB_CLIENT_ID` | `<GITHUB_CLIENT_ID>` | GitHub OAuth 客户端 ID | **是** |
| `GITHUB_CLIENT_SECRET` | `<GITHUB_CLIENT_SECRET>` | GitHub OAuth 客户端密钥 | **是** |
| `GITHUB_REDIRECT_URI` | `<GITHUB_REDIRECT_URI>` | GitHub OAuth 回调 URL | **是** |

#### sinan-web 服务环境变量
| 变量名 | 默认值 | 描述 | 是否必须 |
|--------|--------|------|----------|
| `SINAN_BASE_URL` | `https://sinan.host` | Sinan 基础 URL | 是 |
| `UPLOAD_BASE_PATH` | `./upload` | 文件上传基础路径 | 否 |
| `UPLOAD_ICON_PATH` | `icons` | 图标上传路径 | 否 |
| `UPLOAD_URL_PREFIX` | `/api/bookmark` | 上传 URL 前缀 | 否 |

#### Passkey 相关环境变量（可选）

| 变量名 | 默认值 | 描述 | 是否必须 |
|--------|--------|------|----------|
| `PASSKEY_ID` | `sinan.host` | Passkey 标识符 | 否 |
| `PASSKEY_NAME` | `sinan` | Passkey 名称 | 否 |
| `PASSKEY_ORIGIN` | `https://sinan.host` | Passkey 来源地址 | 否 |

#### sinan-website 服务环境变量

| 变量名 | 默认值 | 描述 | 是否必须 |
|--------|--------|------|----------|
| `TZ` | `Asia/Shanghai` | 时区设置 | 否 |
| `API_BASE_URL` | `api` | API 基础 URL | 是 |
| `NODE_ENV` | `production` | Node.js 运行环境 | 是 |

#### mysql 服务环境变量

| 变量名 | 默认值 | 描述 | 是否必须 |
|--------|--------|------|----------|
| `MYSQL_ROOT_PASSWORD` | `root123` | MySQL root 用户密码 | 是 |
| `MYSQL_DATABASE` | `sinan` | 初始化创建的数据库名 | 是 |
| `MYSQL_USER` | `sinan` | MySQL 普通用户名 | 是 |
| `MYSQL_PASSWORD` | `sinan123` | MySQL 普通用户密码 | 是 |
| `TZ` | `Asia/Shanghai` | 时区设置 | 否 |

::: warning 重要提示
- 标记为**是**的变量（特别是 GitHub OAuth 相关配置）必须在部署前进行配置
- `<GITHUB_CLIENT_ID>`、`<GITHUB_CLIENT_SECRET>` 和 `<GITHUB_REDIRECT_URI>` 需要替换为实际的 GitHub OAuth 应用配置
- 数据库密码建议在生产环境中修改为更安全的密码
:::

### GitHub OAuth 配置说明

要获取 GitHub OAuth 配置，请按以下步骤操作：

1. 访问 [GitHub Developer Settings](https://github.com/settings/developers)
2. 点击 "New OAuth App"
3. 填写以下信息：
   - **Application name**: Sinan
   - **Homepage URL**: `https://your-domain.com`
   - **Authorization callback URL**: `https://your-domain.com/api/oauth/callback/github`
4. 创建后获取 Client ID 和 Client Secret
5. 将这些值填入对应的环境变量中
