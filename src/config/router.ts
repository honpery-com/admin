export interface Route {
    path: string;
    title?: string;
    name?: string;
    icon?: string;
    children?: Route[];
}

export const RouterConfig: Route[] = [
    {
        path: 'login',
        title: 'login',
    },
    {
        path: '',
        title: 'dashboard',
        name: 'dashboard',
        children: [
            {
                path: 'home',
                title: 'Home',
                icon: 'home',
                children: [],
            },
            {
                path: 'article',
                title: 'Article',
                icon: 'book',
                children: [
                    {
                        path: 'add',
                        title: '创建文章',
                    },
                    {
                        path: '',
                        title: '文章',
                        children: [
                            {
                                path: ':article_id/edit',
                                name: 'edit',
                                title: '编辑文章',
                            },
                            {
                                path: ':article_id',
                                name: 'detail',
                                title: '文章详情',
                            },
                            {
                                path: '',
                                name: 'empty',
                                title: '文章',
                            },
                        ],
                    },
                ],
            },
            {
                path: 'picture',
                title: 'Picture',
                icon: 'camera',
                children: [
                    {
                        path: '',
                        title: '图片',
                    },
                ],
            },
            {
                path: 'base',
                title: 'Base',
                icon: 'list-alt',
                children: [
                    {
                        path: '',
                        title: '基础',
                        children: [
                            {
                                path: 'category',
                                title: '分类',
                            },
                            {
                                path: 'tag',
                                title: '标签',
                            },
                        ],
                    },
                ],
            },
            {
                path: 'user',
                title: 'User',
                icon: 'users',
                children: [
                    {
                        path: '',
                        title: '用户',
                    },
                ],
            },
            {
                path: 'setting',
                title: 'Setting',
                icon: 'cog',
                children: [
                    {
                        path: '',
                        title: '设置',
                    },
                ],
            },
        ],
    },
];
