/**
 * Created by arunatebel on 7/26/17.
 */
/**
 * Created by arunatebel on 7/26/17.
 */
import React, {Component} from 'react';
import ReactQuill from 'react-quill';
/* 
 * Simple editor component that takes placeholder text as a prop 
 */
class DefaultEditor extends React.Component {
    constructor (props) {
        super(props)
        this.state = { editorHtml: '', theme: 'snow' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (html) {
        console.log(this);
        this.setState({ editorHtml: html });
    }

    handleThemeChange (newTheme) {
        if (newTheme === "core") newTheme = null;
        this.setState({ theme: newTheme })
    }

    render () {
        return (
            <div>
                <ReactQuill
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={DefaultEditor.modules}
                    formats={DefaultEditor.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
                <div className="themeSwitcher">
                    <label>Theme </label>
                    <select onChange={(e) =>
                        this.handleThemeChange(e.target.value)}>
                        <option value="snow">Snow</option>
                        <option value="bubble">Bubble</option>
                        <option value="core">Core</option>
                    </select>
                </div>
            </div>
        )
    }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
DefaultEditor.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ]
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
DefaultEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

/* 
 * PropType validation
 */
DefaultEditor.propTypes = {
    placeholder: React.PropTypes.string,
}
export default DefaultEditor;