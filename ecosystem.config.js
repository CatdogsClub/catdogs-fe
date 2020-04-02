// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'catdogs-fe',
            script: 'yarn',
            args: 'run start'
        }
    ],
    deploy: {
        // "prod" is the environment name
        prod: {
            user: 'hyh',
            key: '~/.ssh/id_rsa',
            host: ['118.24.146.34'],
            ssh_options: 'StrictHostKeyChecking=no',
            // 拉取部署分支
            ref: 'origin/DEPLOY-PROD',
            // 仓库地址
            repo: 'git@github.com:CatdogsClub/catdogs-fe.git',
            // 部署 remote 路径
            path: '/usr/hyh/catdogs-fe-auto-deployment',
            'post-deploy': 'yarn install && pm2 reload ecosystem.config.js'
        },
    }
}