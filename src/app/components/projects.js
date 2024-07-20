import Image from "next/image";
import { Fragment } from "react";
import projectData from "./projectData";

export default function Projects() {
  return (
    <div className="bg-white pt-2 sm:pt-4 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Past Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Where I&apos;ve been
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {projectData.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    alt=""
                    width={500}
                    height={500}
                    src={post.imageUrl}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">{post.date}</time>
                  </div>

                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {post.href ? (
                        <a href={post.href ? post.href : ""} target="_blank">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      ) : (
                        <div>
                          <span className="absolute inset-0" />
                          {post.title}
                        </div>
                      )}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-b-4 border-gray-900/5">
                    <div className="relative flex items-center gap-x-4">
                      {post.tools.map((tool, num) => {
                        return (
                          <div key={num}>
                            <tool.icon
                              aria-hidden="true"
                              className="h-12 w-12"
                            />
                            <div className="text-sm leading-6">
                              <p className="font-semibold text-gray-900">
                                <span className="absolute inset-0" />
                                {tool.name}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="my-6">
                    {post.github ? (
                      <Fragment>
                        <a
                          href={post.github}
                          target="_blank"
                          className="text-gray-700 border-2 border-gray-400 hover:border-gray-900 rounded-xl"
                        >
                          &nbsp;View Repo&nbsp;
                        </a>
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
