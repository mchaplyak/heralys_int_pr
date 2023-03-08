import React, {Component} from 'react';
import ClientsList from "../../components/ClientsList";

class ListOfClientsPage extends Component {
    render() {
        return (
            <div>
                {/* List of Clients Page */}
                <ClientsList />
            </div>
        );
    }
}

export default ListOfClientsPage;