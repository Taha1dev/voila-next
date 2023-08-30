"use client";
import { BlogSideBarCategories } from "@/components/blog/BlogSideBarCategories";
import { RecentBlogs } from "@/components/blog/RecentBlogs";
import HeroBanner from "@/components/highlight/HeroBanner";
import { useParams } from "next/navigation";

const OneBlog = () => {
  const { id } = useParams();

  return (
    <div>
      <p>page {id}</p>
      <HeroBanner />
      <main>blog Contetnt</main>
      <BlogSideBarCategories />
      <RecentBlogs />
    </div>
  );
};

export default OneBlog;
