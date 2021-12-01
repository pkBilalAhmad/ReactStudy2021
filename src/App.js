import React from 'react';


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: this.props.data }
        this._sort = this._sort.bind(this)
        // this.content = this.content.bind(this)
    }
    // content() {
    //     var headers = [
    //         "Book", "Author", "Language", "Published", "Sales"
    //     ];
    //     var data = [
    //         ["The Lord of the Rings", "J. R. R. Tolkien",
    //             "English", "1954–1955", "150 million"],
    //         ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
    //             "French", "1943", "140 million"],
    //         ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
    //             "English", "1997", "107 million"],
    //         ["And Then There Were None", "Agatha Christie",
    //             "English", "1939", "100 million"],
    //         ["Dream of the Red Chamber", "Cao Xueqin",
    //             "Chinese", "1754–1791", "100 million"],
    //         ["The Hobbit", "J. R. R. Tolkien",
    //             "English", "1937", "100 million"],
    //         ["She: A History of Adventure", "H. Rider Haggard",
    //             "English", "1887", "100 million"]
    //     ];
    //     return {
    //         headers,
    //         data
    //     }
    // }
    _sort(e) {
        let column = e.target.cellIndex;
        let data = this.state.data.slice();
        data.sort((function (a, b) {
            return a[column] > b[column]
        }))
        this.setState({
            data: data
        });
    }
    render() {
        let cont = () => this.content()
        return (
            <div>
                <table>
                    <thead onClick={this._sort}>
                        <tr>
                            {this.props.headers.map((item) => (
                                <th key={item} style={{ border: '2px solid red' }} >{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item) => (
                            <tr key={item}>{item.map((cell) => (
                                <td key={cell} style={{ border: '2px solid blue' }}>{cell}</td>
                            ))}</tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
function DataList() {
    var headers = [
        "Book", "Author", "Language", "Published", "Sales"
    ];
    var data = [
        ["The Lord of the Rings", "J. R. R. Tolkien",
            "English", "1954–1955", "150 million"],
        ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
            "French", "1943", "140 million"],
        ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
            "English", "1997", "107 million"],
        ["And Then There Were None", "Agatha Christie",
            "English", "1939", "100 million"],
        ["Dream of the Red Chamber", "Cao Xueqin",
            "Chinese", "1754–1791", "100 million"],
        ["The Hobbit", "J. R. R. Tolkien",
            "English", "1937", "100 million"],
        ["She: A History of Adventure", "H. Rider Haggard",
            "English", "1887", "100 million"]
    ];
    return (
        <div> <Table headers={headers} data={data} />
        </div>
    )
}

export default DataList;