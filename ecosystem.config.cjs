module.exports = {
    apps: [
        {
            name: "PORTOFOLIO2 WEB APP",
            port: "3001",
            exec_mode: "cluster",
            instances: 1,
            script: "./.output/server/index.mjs"
        }
    ]
};
