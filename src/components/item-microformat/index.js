import DocumentItem from './document-item';
import BlogItem from './document-blog-item';
import ProductItem from './product-item';
import FolderItem from './folder-item';
import DocumentBlogItem from './document-blog-item';

export default function ItemMicroformat({ item, index }) {
  if (!item) {
    return null;
  }
  const types = {
    product: <ProductItem data={item} key={item.path} />,
    folder: item.blogPost ? (
      <DocumentBlogItem data={item} key={item.path} index={index} />
    ) : (
      <FolderItem data={item} key={item.path} />
    ),
    document: item.blogPost ? (
      <BlogItem data={item} key={item.path} />
    ) : (
      <DocumentItem data={item} key={item.path} />
    )
  };

  return types[item.type] || null;
}
