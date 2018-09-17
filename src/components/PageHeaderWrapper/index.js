import './index.less'
import GridContent from './GridContent';
import PageHeader from '@/components/PageHeader';
const PageHeaderWrapper = {
    props: ["contentWidth","wrapperClassName","top"],
    render(){
        const {$slots,contentWidth,wrapperClassName,top} = this
        const children = $slots.default;
        return (
            <div style={{ margin: '-24px -24px 0' }} class={wrapperClassName}>
                {top}
                <PageHeader
                wide={contentWidth === 'Fixed'}
                home={$t('menu.home')}
                // {...value}
                key="pageheader"
                // {...restProps}
                // linkElement={Link}
                // itemRender={item => {
                //   if (item.locale) {
                    // return $t(item.locale)|
                //   }
                //   return item.name;
                // }}
                />
                {children?(
                    <div class="content">
                        <GridContent>{children}</GridContent>
                    </div>
                ):null}
            </div>
        )
    }

}
export default PageHeaderWrapper