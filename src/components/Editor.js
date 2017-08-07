/**
 * Created by arunatebel on 7/26/17.
 */
import React, {Component} from 'react';
import theme from 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.className = props.className;
        this.state = {theme: 'snow'};
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(html) {
        this.props.setCurrentEditorContent(html);
    }

    render() {
        return (
            <div className={this.className}>
                <ReactQuill
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.props.editorContent}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
                <button type="button" onClick={this.props.saveEditorContent} id="editorSaveBtn" className="btn btn-success">Save</button>
            </div>
        )
    }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
    toolbar: [
        [{'header': '1'}, {'header': '2'}, {'font': []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ]
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

/*
 * PropType validation
 */
Editor.propTypes = {
    placeholder: React.PropTypes.string,
};

export default Editor;