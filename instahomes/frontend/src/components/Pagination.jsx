import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} class="page-item">
                        <a onClick={() => paginate(number)} class="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Pagination