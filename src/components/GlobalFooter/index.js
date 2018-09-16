import './index.less'
import classNames from 'classnames';
const GlobalFooter = {
    props: ["className", "links", "copyright"],
    
    render(){
        const {className,links,copyright} = this;
        const cls = classNames('globalFooter', className);
        return (
            <div class={cls}>
                {links && (
                    <div class="links">
                        {links.map(link => (
                            <a
                                key={link.key}
                                title={link.key}
                                target={link.blankTarget ? '_blank' : '_self'}
                                href={link.href}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                )}
                {copyright && <div class="copyright">{copyright}</div>}
            </div>
        )
    }
}

export default GlobalFooter