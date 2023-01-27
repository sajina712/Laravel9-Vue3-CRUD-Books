const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const BookList = () => import('./components/book/List.vue' /* webpackChunkName: "resource/js/components/book/list" */)
const BookCreate = () => import('./components/book/Add.vue' /* webpackChunkName: "resource/js/components/book/add" */)
const BookEdit = () => import('./components/book/Edit.vue' /* webpackChunkName: "resource/js/components/book/edit" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: BookList
    },
    {
        name: 'bookList',
        path: '/book',
        component: BookList
    },
    {
        name: 'bookEdit',
        path: '/book/:id/edit',
        component: BookEdit
    },
    {
        name: 'bookAdd',
        path: '/book/add',
        component: BookCreate
    }
]