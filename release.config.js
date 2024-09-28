const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ["@semantic-release/changelog",{
            "changelogFile": "CHANGELOG.md"
        }],
        ["@semantic-release/git",{
            "assets": ["CHANGELOG.md", "package.json"],
            "message": "chore(release): update CHANGELOG.md for version"
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;