import './index.less'
import GridContent from './GridContent';
import PageHeader from '@/components/PageHeader';
const PageHeaderWrapper = {
    props: ["contentWidth","wrapperClassName","loading","content","extraContent","breadcrumbList","title"],
    render(){
        const {$slots,contentWidth,wrapperClassName,content,extraContent,breadcrumbList,title} = this
        const children = $slots.default;
        const top = $slots.top;
        return (
            <div style={{ margin: '-24px -24px 0' }} class={wrapperClassName}>
                {top}
                <PageHeader
                wide={contentWidth === 'Fixed'}
                home={this.$t('menu.home')}
                content={content}
                extraContent={extraContent}
                breadcrumbList={breadcrumbList}
                title={title}
                linkElement={'router-link'}
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