import React from 'react'

const View = (props) => {


    

    return (
        <div>

            <button type="button" ref={props.viewref} className="btn btn-primary d-none" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Showing Notes : {props.Vn.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        
                        <div className='container'>
                            <blockquote className='text-bold text-success'>{props.Vn.description}</blockquote>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
