import { Tooltip, Icon } from "ant-design-vue";
import styles from './ThemeColor.less';

const Tag = {
    props: ["color", "check"],
    methods:{
        handleChange(color) {
            this.$emit('change', color);
        },
    },
    render() {
        const { color, check } = this
        return (
            <div
                onClick={()=>this.handleChange(color)}
                style={{
                    backgroundColor: color,
                }}
            >
                {check ? <Icon type="check" /> : ''}
            </div>
        )
    }
}

const ThemeColor = {
    props: ["colors", "title", "value"],
    methods:{
        handleChange(color) {
            this.$emit('change', color);
        },
    },
    render() {
        const { colors, title, value } = this
        let colorList = colors;
        if (!colors) {
            colorList = [
                {
                    key: 'dust',
                    color: '#F5222D',
                },
                {
                    key: 'volcano',
                    color: '#FA541C',
                },
                {
                    key: 'sunset',
                    color: '#FAAD14',
                },
                {
                    key: 'cyan',
                    color: '#13C2C2',
                },
                {
                    key: 'green',
                    color: '#42b983',
                },
                {
                    key: 'daybreak',
                    color: '#1890FF',
                },
                {
                    key: 'geekblue',
                    color: '#2F54EB',
                },
                {
                    key: 'purple',
                    color: '#722ED1',
                },
            ];
        }
        return (
            <div class="themeColor">
                <h3 class="title">{title}</h3>
                <div>
                    {colorList.map(({ key, color }) => (
                        <Tooltip key={color} title={this.$t(`app.setting.themecolor.${key}`)}>
                            <Tag
                                class="colorBlock"
                                color={color}
                                check={value === color}
                                onChange={color=>this.handleChange(color)}
                            />
                        </Tooltip>
                    ))}
                </div>
            </div>
        )
    }

};

export default ThemeColor;
