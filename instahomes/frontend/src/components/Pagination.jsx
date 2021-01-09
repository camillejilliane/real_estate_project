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
                    <li key={number} class={`page-item button class="btn"`}>
                        <a onClick={() => paginate(number)} class="page-link" style={{ backgroundColor: Listings.currentPage = Listings.paginate ? 'blue' : {} }}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Pagination