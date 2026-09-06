import './styles/blogsList.scss'
import { blogs } from "../data.js"
import { lazy, Suspense, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
const BlogCard = lazy(() => import('../assets/BlogCard'))

const BlogsList = () => {
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    console.log(searchValue)
  })

  const filteredItems = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchValue.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <section className='p-blog-list-m-c container' id='blogs'>
      <h2>BLOGS</h2>
      <div className="blog-description-c">
        <p>Thoughts, tutorials and guides on web development, React and more.</p>
        <input type="text" placeholder='Search Anything...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className="blog-cards-main-container">
        {filteredItems.map((blog) => (
          <Suspense fallback={<Skeleton height={300} baseColor='gray' borderRadius={20} />}>
            <BlogCard key={blog.id} image={blog.coverImage} blogDate={blog.date} heading={blog.title} paragraph={blog.excerpt} imageTag={blog.category} readMoreLink="" />
          </Suspense>
        ))}
      </div>
    </section>
  )
}

export default BlogsList