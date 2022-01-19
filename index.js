/**
 * @abstract Console log helper that takes markdown syntax and only 
 * fires when node !production
 * @options title headings and meta tag options 
 * @requires marked 
 * @requires marked-terminal
 * @author Bresnow
 */


import {marked} from 'marked';
import TerminalRenderer from 'marked-terminal';

marked.setOptions({
    // Define custom renderer
    renderer: new TerminalRenderer()
});


const dev = () => {
    if (process.env.NODE_ENV !== 'production') {
        return console
    }
}
const _ = {

    log: (arg, {title, meta}) => {
        if ( title) dev().log(marked(`# title: ${title}`))
        if (meta) meta.forEach((tag) => dev().log(marked(` - ${tag}`)))
        dev().log(marked(arg))
    },
    err: (arg, {title, meta}) => {
        if (title) dev().log(marked(`# title: ${title}`))
        if (meta) meta.forEach((tag) => dev().log(marked(` - ${tag}`)))
        dev().error(marked(arg))
    },

    info: (arg, {title, meta}) => {
        if (title) dev().log(marked(`# title:  ${title}`))
        if (meta) meta.forEach((tag) => dev().log(marked(` - ${tag}`)))
        dev().info(marked(arg))
    }
}