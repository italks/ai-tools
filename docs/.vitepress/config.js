export default {
    lang: 'zh-CN',
    title: 'AI 工具集',
    description: '分享GAN AI在各领域的应用',
    base: '/',
    cleanUrls: true,
    lastUpdated: true,

    head: [['meta', { name: 'theme-color', content: '#6495ED' }]],
    markdown: {
        headers: {
            level: [0, 0]
        }
    },

    themeConfig: {
        nav: nav(),
        // sidebar: {
        //     '/Vue/':sidebarVue(),
        //     '/ML/':sidebarML(),
        //     '/Ubuntu/':sidebarUbuntu(),
        // },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/italks/ai-tools' }
        ],
        footer: {
            message: 'Released under the Creative Commons license.',
            copyright: 'Copyright © 2023-present italks'
        },
    }
}
function nav() {
    return [
        { text: '文字', link: '/words',activeMatch:'/words' },
        {text:'图片',link:'/images',activeMatch:'/images'},
        { text: '音频', link: '/voices',activeMatch:'/voices' },
        { text: '视频', link: '/videos',activeMatch:'/videos' },
        { text: '国内镜像', link: '/china',activeMatch:'/china' },
    ]
}


// function sidebarVue() {
//     return [
//         {
//             text:'Vue2',
//             collapsed:false,
//             items:[]
//         },{
//             text:'Vue3',
//             collapsed:false,
//             items:[]
//         }
//     ]
// }

// function sidebarML(){
//     return[
//         {
//             text:'Google ML Kit',
//             collapsed:false,
//             items:[]
//         },
//         {
//             text:'MediaPipe',
//             collapsed:false,
//             items:[]
//         },
//         {
//             text:'NCNN/TNN',
//             collapsed:false,
//             items:[]
//         }
//     ]
// }
// function sidebarUbuntu(){
//     return [
//         {
//             text:'微信QQ社群',
//             link:'/Ubuntu/WeChatQQ',
//             activeMatch:'/Ubuntu/WeChatQQ'
//         }
//     ]
// }