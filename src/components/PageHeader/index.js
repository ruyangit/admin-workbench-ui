import './index.less'
import pathToRegexp from 'path-to-regexp';
import { Breadcrumb,Tabs } from "ant-design-vue";
import { mapGetters } from "vuex";
const {TabPane} = Tabs
export function urlToList(url) {
    const urllist = url.split('/').filter(i => i);
    return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
}

export const getBreadcrumb = (breadcrumbNameMap, url) => {
    let breadcrumb = breadcrumbNameMap[url];
    if (!breadcrumb) {
        Object.keys(breadcrumbNameMap).forEach(item => {
            if (pathToRegexp(item).test(url)) {
                breadcrumb = breadcrumbNameMap[item];
            }
        });
    }
    return breadcrumb || {};
};
const PageHeader = {
    computed: {
        ...mapGetters({
            breadcrumbNameMap: "global/nav/getBreadcrumbNameMap",
        }),
    },
    props: ["wide", "home", "title", "action", "content", "extraContent", "breadcrumbList", "breadcrumbSeparator", "itemRender", "linkElement","tabList", "tabActiveKey", "tabBarExtraContent","tabChange"],
    methods: {
        conversionFromProps() {
            const { breadcrumbList, breadcrumbSeparator, itemRender, linkElement = 'a' } = this;
            return (
                <Breadcrumb class="breadcrumb" separator={breadcrumbSeparator}>
                    {breadcrumbList.map(item => {
                        const title = itemRender ? itemRender(item) : item.title;
                        return (
                            <Breadcrumb.Item key={item.title}>
                                {item.href
                                    ? h(
                                        linkElement,
                                        {
                                            attrs: {
                                                [linkElement === 'a' ? 'href' : 'to']: item.href,
                                            }
                                        },
                                        title
                                    )
                                    : title}
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
            );
        },
        conversionBreadcrumbList() {
            const { breadcrumbList, $route, breadcrumbNameMap} = this;
            if (breadcrumbList && breadcrumbList.length) {
                return this.conversionFromProps();
            }
            // 根据 location 生成 面包屑
            // Generate breadcrumbs based on location
            if ($route && $route.path) {
                return this.conversionFromLocation($route, breadcrumbNameMap);
            }
            return null;
        },
        conversionFromLocation(route, breadcrumbNameMap) {
            const { breadcrumbSeparator, home, itemRender, linkElement = 'a' } = this;
            // Convert the url to an array
            const pathSnippets = urlToList(route.path);
            // Loop data mosaic routing
            const extraBreadcrumbItems = pathSnippets.map((url, index) => {
                const currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url);
                if (currentBreadcrumb.inherited) {
                    return null;
                }
                const isLinkable = index !== pathSnippets.length - 1 && !currentBreadcrumb.menus;
                const name = itemRender ? itemRender(currentBreadcrumb) : currentBreadcrumb.name;
                return currentBreadcrumb.name && !currentBreadcrumb.hideInBreadcrumb ? (
                    <Breadcrumb.Item key={url}>
                        {h(
                            isLinkable ? linkElement : 'span',
                            { attrs: { [linkElement === 'a' ? 'href' : 'to']: url } },
                            name
                        )}
                    </Breadcrumb.Item>
                ) : null;
            });
            // Add home breadcrumbs to your head
            extraBreadcrumbItems.unshift(
                <Breadcrumb.Item key="home">
                    {h(
                        linkElement,
                        {
                            attrs:
                            {
                                [linkElement === 'a' ? 'href' : 'to']: '/'
                            }
                        },
                        home || 'Home'
                    )}
                </Breadcrumb.Item>
            );
            return (
                <Breadcrumb class="breadcrumb" separator={breadcrumbSeparator}>
                    {extraBreadcrumbItems}
                </Breadcrumb>
            );
        },
        // itemRender(route, params, routes, paths){
        //     const { linkElement = 'a' } = this;
        //     const last = routes.indexOf(route) === routes.length - 1;
        //     return last || !route.component ? (
        //     <span>{route.breadcrumbName}</span>
        //     ) : (
        //     // createElement(
        //     //     linkElement,
        //     //     {
        //     //     href: paths.join('/') || '/',
        //     //     to: paths.join('/') || '/',
        //     //     },
        //     //     route.breadcrumbName
        //     // )
        //     <a>atest</a>
        //     );
        // }
    },
    render() {
        const { wide = false, logo, title, action, content, extraContent, tabList, tabActiveKey, tabBarExtraContent, tabChange } = this
        const breadcrumb = this.conversionBreadcrumbList();
        return (
            <div class="pageHeader">
                <div class={wide ? 'wide' : ''}>
                    {breadcrumb}
                    <div class="detail">
                        {logo && <div class="logo">{logo}</div>}
                        <div class="main">
                            <div class="row">
                                {title && <h1 class="title">{title}</h1>}
                                {action && <div class="action">{action}</div>}
                            </div>
                            <div class="row">
                                {content && <div class="content">{content}</div>}
                                {extraContent && <div class="extraContent">{extraContent}</div>}
                            </div>
                        </div>
                    </div>
                    {tabList && tabList.length ? (
                    <Tabs
                        size="small"
                        class="tabs"
                        defaultActiveKey={tabActiveKey}
                        onChange={tabChange}
                        tabBarExtraContent={tabBarExtraContent}
                    >
                        {tabList.map(item => (
                        <TabPane tab={item.tab} key={item.key} />
                        ))}
                    </Tabs>
                    ) : null}
                </div>
            </div>
        )
    }
}
export default PageHeader