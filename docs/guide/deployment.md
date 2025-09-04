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
