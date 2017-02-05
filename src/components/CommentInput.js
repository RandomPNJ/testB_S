import React, { Component } from 'react';


export class CommentInput extends Component {

    render() {
        return (
            <div>
                <div>
                    <div class="input-group">
                        <span class="input-group-addon">REQ</span>
                        <input type="text" class="form-control" placeholder="Username"/>
                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="email"/>
                        <span class="input-group-addon">@</span>
                        <input type="text" class="form-control" placeholder="email"/>
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><span>.com</span></li>
                            <li><span>.fr</span></li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" class="form-control" placeholder="Contenu"/>
                    </div>
                </div>
                <div>
                    <Button>Save</Button>
                </div>
            </div>

        )
    }
}
