(function(_0x4e63cd,_0x4a98f6){const _0x1ce7c3=_0x3827,_0x2e16b0=_0x4e63cd();while(!![]){try{const _0x5d9b4a=parseInt(_0x1ce7c3(0x188))/0x1*(-parseInt(_0x1ce7c3(0x176))/0x2)+-parseInt(_0x1ce7c3(0x178))/0x3+-parseInt(_0x1ce7c3(0x18a))/0x4*(-parseInt(_0x1ce7c3(0x186))/0x5)+-parseInt(_0x1ce7c3(0x173))/0x6+parseInt(_0x1ce7c3(0x18d))/0x7+parseInt(_0x1ce7c3(0x16f))/0x8+parseInt(_0x1ce7c3(0x187))/0x9*(parseInt(_0x1ce7c3(0x18b))/0xa);if(_0x5d9b4a===_0x4a98f6)break;else _0x2e16b0['push'](_0x2e16b0['shift']());}catch(_0xbd85d9){_0x2e16b0['push'](_0x2e16b0['shift']());}}}(_0xfb4d,0x21352));import{exec}from'child_process';import _0x4fee05 from'axios';import _0x17c73e from'../../config.cjs';const updateCommand=async(_0x335fcd,_0xf38a80)=>{const _0x10c780=_0x3827,_0x21a120=await _0xf38a80['decodeJid'](_0xf38a80[_0x10c780(0x166)]['id']),_0xbdd48f=[_0x21a120,_0x17c73e['OWNER_NUMBER']+_0x10c780(0x16a)][_0x10c780(0x179)](_0x335fcd[_0x10c780(0x183)]),_0x3ca005=_0x17c73e['PREFIX'],_0x36ae93=_0x335fcd[_0x10c780(0x168)][_0x10c780(0x16d)](_0x3ca005)?_0x335fcd[_0x10c780(0x168)][_0x10c780(0x163)](_0x3ca005[_0x10c780(0x17a)])[_0x10c780(0x17b)]('\x20')[0x0][_0x10c780(0x17f)]():'',_0x59cda2=_0x335fcd[_0x10c780(0x168)][_0x10c780(0x163)](_0x3ca005[_0x10c780(0x17a)]+_0x36ae93['length'])[_0x10c780(0x165)](),_0x14e9e5=_0x10c780(0x18c),_0x3bd446=_0x10c780(0x181),_0x35bce0=_0x10c780(0x161)+_0x3bd446,_0x543eea='https://api.github.com/repos/sarkar-Bandaheali/Sarkar-MD/commits';if(_0x36ae93===_0x10c780(0x184)){if(!_0xbdd48f)return _0x335fcd[_0x10c780(0x16c)](_0x10c780(0x177));try{const _0x4383f0=await _0x4fee05[_0x10c780(0x17e)](_0x543eea),_0x31ddb2=_0x4383f0[_0x10c780(0x162)][_0x10c780(0x17a)],_0x2290f7=_0x4383f0[_0x10c780(0x162)][0x0][_0x10c780(0x189)];let _0x1827d9='The\x20GitHub\x20repository\x20has\x20'+_0x31ddb2+'\x20commits.\x0aLatest\x20commit\x20SHA:\x20'+_0x2290f7;_0x335fcd[_0x10c780(0x16c)](_0x1827d9);}catch(_0x13835e){console[_0x10c780(0x171)](_0x10c780(0x172),_0x13835e),_0x335fcd[_0x10c780(0x16c)](_0x10c780(0x185));}}if(_0x36ae93===_0x10c780(0x170)){if(!_0xbdd48f)return _0x335fcd[_0x10c780(0x16c)](_0x10c780(0x177));let _0x552ff2;exec(_0x10c780(0x175)+_0x35bce0,(_0x19c5dd,_0x2d4522,_0x52f037)=>{const _0xabd5c8=_0x10c780;if(_0x19c5dd){_0x552ff2='Repository\x20not\x20found.\x20Please\x20clone\x20the\x20repo\x20first.',_0x335fcd['reply'](_0x552ff2);return;}else exec(_0xabd5c8(0x169)+_0x35bce0+_0xabd5c8(0x17c),(_0x3919cd,_0x8f7948,_0x46e2c0)=>{const _0x2911a7=_0xabd5c8;if(_0x3919cd){console[_0x2911a7(0x171)](_0x2911a7(0x174)+_0x3919cd),_0x552ff2=_0x2911a7(0x16e),_0x335fcd['reply'](_0x552ff2);return;}exec(_0x2911a7(0x169)+_0x35bce0+_0x2911a7(0x17d),(_0x55d418,_0xaccd90,_0x4dd87c)=>{const _0x59da5f=_0x2911a7;if(_0x55d418){console[_0x59da5f(0x171)](_0x59da5f(0x16b)+_0x55d418),_0x552ff2='Failed\x20to\x20fetch\x20commit\x20logs.',_0x335fcd[_0x59da5f(0x16c)](_0x552ff2);return;}const _0x712456=_0xaccd90[_0x59da5f(0x17b)]('\x0a')['map'](_0x1122ce=>_0x1122ce[_0x59da5f(0x165)]())[_0x59da5f(0x164)](Boolean),_0x18369b=_0x712456[0x0][_0x59da5f(0x17b)]('\x20')[0x0];exec(_0x59da5f(0x169)+_0x35bce0+_0x59da5f(0x167),(_0x4092e1,_0x52caed,_0x29355d)=>{const _0x37cb9c=_0x59da5f;if(_0x4092e1){console['error'](_0x37cb9c(0x18e)+_0x4092e1),_0x552ff2=_0x37cb9c(0x182),_0x335fcd[_0x37cb9c(0x16c)](_0x552ff2);return;}console[_0x37cb9c(0x180)]('Updated\x20modified\x20files\x20successfully:\x0a'+_0x52caed),_0x552ff2='Updated\x20modified\x20files\x20successfully:\x0a'+_0x52caed,_0x335fcd[_0x37cb9c(0x16c)](_0x552ff2);});});});});}};function _0x3827(_0xd5d418,_0x5a0705){const _0xfb4d49=_0xfb4d();return _0x3827=function(_0x3827ec,_0x1be0e8){_0x3827ec=_0x3827ec-0x161;let _0x51bcc6=_0xfb4d49[_0x3827ec];return _0x51bcc6;},_0x3827(_0xd5d418,_0x5a0705);}export default updateCommand;function _0xfb4d(){const _0x10bc74=['update','Error\x20fetching\x20commits\x20count\x20from\x20GitHub.','5bQHsLz','27eFAsZT','2VJRrIJ','sha','556trIHYT','1155110OFnvUP','https://github.com/sarkar-Bandaheali/Sarkar-MD.git','1002211isrnXZ','Checkout\x20error:\x20','/home/container/','data','slice','filter','trim','user','\x20&&\x20git\x20checkout\x20origin/main\x20--\x20.','body','cd\x20','@s.whatsapp.net','Log\x20error:\x20','reply','startsWith','Failed\x20to\x20fetch\x20the\x20latest\x20changes.\x20Please\x20check\x20the\x20repo\x20path.','1059808qWPiwe','update\x20now','error','Error\x20fetching\x20commits:','757902SFfGjj','Fetch\x20error:\x20','test\x20-d\x20','136826CFLjdC','*📛\x20THIS\x20IS\x20AN\x20OWNER\x20COMMAND*','669480SnnhWY','includes','length','split','\x20&&\x20git\x20fetch\x20origin','\x20&&\x20git\x20log\x20origin/main\x20--oneline','get','toLowerCase','log','Sarkar-MD','Failed\x20to\x20update\x20the\x20modified\x20files.','sender'];_0xfb4d=function(){return _0x10bc74;};return _0xfb4d();}