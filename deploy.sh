#!/bin/bash

# 金融学习计划网站部署脚本

set -e

echo "🚀 开始部署金融学习计划网站到 Gitee Pages"

# 检查当前目录
if [ ! -d "website" ]; then
    echo "❌ 错误：website 目录不存在"
    exit 1
fi

# 检查git仓库
if [ ! -d ".git" ]; then
    echo "❌ 错误：当前目录不是git仓库"
    exit 1
fi

echo "📁 检查文件结构..."
ls -la website/

echo "📝 添加文件到git..."
git add website/
git add .gitignore
git add DEPLOYMENT.md 2>/dev/null || true

echo "💾 提交更改..."
git commit -m "部署金融学习计划网站 v1.0.0

包含以下功能：
- 完整的12个月学习计划展示
- 第1周学习材料（供给与需求基础）
- 每日练习系统
- 学习进度跟踪
- 主题切换（亮色/暗色模式）
- 响应式设计
- Gitee Pages部署配置" || echo "⚠️ 没有新的更改需要提交"

echo "📤 推送到Gitee..."
git push origin master

echo ""
echo "✅ 代码已推送到Gitee！"
echo ""
echo "📋 下一步操作："
echo "1. 访问 https://gitee.com/handora/financial_learning_project"
echo "2. 点击'服务' → 'Gitee Pages'"
echo "3. 配置部署："
echo "   - 部署分支: master"
echo "   - 部署目录: website/"
echo "4. 点击'启动'或'更新'"
echo ""
echo "🌐 网站将可通过以下地址访问："
echo "   https://handora.gitee.io/financial_learning_project/"
echo ""
echo "🔧 本地测试："
echo "   cd website && python3 -m http.server 8080"
echo "   然后访问 http://localhost:8080"
echo ""
echo "🎉 部署完成！"