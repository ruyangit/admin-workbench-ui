import { Layout, Icon } from "ant-design-vue";
import GlobalFooter from '@/components/GlobalFooter';
const { Footer } = Layout;
const FooterView = {
    render(){
        return (
            <Footer style={{ padding: 0 }}>
              <GlobalFooter
                links={[
                  {
                    key: 'Pro 首页',
                    title: 'Pro 首页',
                    href: 'https://github.com/ruyangit/seed-workbench-ui.git',
                    blankTarget: true,
                  },
                  {
                    key: 'github',
                    title: <Icon type="github" />,
                    href: 'https://github.com/ruyangit/seed-workbench-ui.git',
                    blankTarget: true,
                  },
                  {
                    key: 'Ant Design',
                    title: 'Ant Design',
                    href: 'https://ant.design',
                    blankTarget: true,
                  },
                ]}
                copyright={
                  <div>
                    Copyright <Icon type="copyright" /> 2018 Ryan Ru 金服体验技术部出品
                  </div>
                }
              />
            </Footer>
          );
    }
}
export default FooterView;
