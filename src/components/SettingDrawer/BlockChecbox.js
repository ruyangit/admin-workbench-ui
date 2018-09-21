import { Tooltip, Icon } from "ant-design-vue";
import './index.less';

const BlockChecbox = {
    props: ["value", "list"],
    methods:{
        handleChange(key) {
            this.$emit('change', key);
        },
    },
    render(){
        const {value,list} = this
        return (
            <div class="blockChecbox" key={value}>
                {list.map(item => (
                <Tooltip title={item.title} key={item.key}>
                    <div class="item" onClick={() => this.handleChange(item.key)}>
                    <img src={item.url} alt={item.key} />
                    <div
                        class="selectIcon"
                        style={{ display: value === item.key ? 'block' : 'none', ...item.style}}
                    >
                        <Icon type="check"/>
                    </div>
                    </div>
                </Tooltip>
                ))}
            </div>
        )
    }
}

export default BlockChecbox;
