import './index.less'
import GridContent from './GridContent';
import PageHeader from '@/components/PageHeader';
import { mapGetters } from "vuex";
const PageHeaderWrapper = {
    props: ["wrapperClassName","content","extraContent","breadcrumbList","title","tabList", "tabActiveKey", "tabBarExtraContent","tabChange"],
    computed: {
        ...mapGetters({
            settings: "global/settings"
        })
    },
    render(){
        const {$slots,wrapperClassName,content,extraContent,breadcrumbList,title,tabList,tabActiveKey,tabBarExtraContent,tabChange} = this
        const children = $slots.default;
        const top = $slots.top;
        return (
            <div style={{ margin: '-24px -24px 0' }} class={wrapperClassName}>
                {top}
                <PageHeader
                wide={this.settings.contentWidth === 'Fixed'}
                home={this.$t('menu.home')}
                content={content}
                extraContent={extraContent}
                breadcrumbList={breadcrumbList}
                title={title}
                linkElement={'router-link'}
                tabList={tabList}
                tabActiveKey={tabActiveKey}
                tabBarExtraContent={tabBarExtraContent}
                tabChange={tabChange}
                itemRender={item => {
                  if (item.locale) {
                    return this.$t(item.locale);
                  }
                  return item.name;
                }}
                />
                {children?(
                    <div class="pageheaderwrapper-content">
                        <GridContent>{children}</GridContent>
                    </div>
                ):null}
            </div>
        )
    }

}
export default PageHeaderWrapper