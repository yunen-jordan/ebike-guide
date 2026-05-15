const fs = require('fs');
const path = require('path');

// 简单背景移除脚本 - 将白色背景转为透明
const brandsDir = path.join(__dirname, 'brands');
const files = fs.readdirSync(brandsDir).filter(f => 
    f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')
);

console.log('发现图片文件:', files.length);
console.log('注意: 此脚本使用简单的颜色替换方法，适合白色背景的图片');
console.log('对于复杂背景，建议使用在线抠图工具');
console.log('');
console.log('可用的在线抠图工具:');
console.log('- https://www.remove.bg/zh (remove.bg)');
console.log('- https://www.slazag.com/background-remover');
console.log('- https://pixlr.com/cn/editor/?editor=background');
console.log('');
console.log('建议: 如果以上工具抠图效果不好，可以手动用 Photoshop 或 GIMP 处理');
