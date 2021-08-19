const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    
    webpack: {
        alias: {
            '@services': resolvePath('./src/common/services'),
            '@stores': resolvePath('./src/common/stores'),
            '@models': resolvePath('./src/common/models'),
            '@styles': resolvePath('./src/common/styles'),
            '@components': resolvePath('./src/components'),
            '@actions': resolvePath('./src/common/actions'),
        }
    },
  
}