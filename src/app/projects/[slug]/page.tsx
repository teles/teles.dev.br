import { notFound } from 'next/navigation'
import { getContent } from '@/lib/Content'
import paths from '@/lib/paths'
import { Section } from '@/components/sectionsRenderer/SectionsRenderer'
import PageRenderer from '@/components/pageRenderer/PageRenderer'
import Home from "@/content/home.json"

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return paths.filter((path) => path.route === 'projects')?.map((path) => {
    return { slug: path.slugs }
  })
}

interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string;
}

const projectToSection = (project: Project, content: string) : Section => {
  return {
    "columns": [
      {
        "components": [
          {
            "type": "Article",
            "props": {
              "title": project.title,
              "tags": project.tags,
              "description": project.description,
              "image":{
                "src": project.image,
                "alt": project.title
              },
              "content": content
            }
          }
        ]
      }
    ]
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const filePath = paths.find((path) => path.slugs === params.slug)?.path

    if(!filePath) {
        notFound()
    }
    const { footer } = Home as { footer: Section[] }
    const { content, frontmatter: project } = getContent<Project>(filePath)

    return (
      <PageRenderer sections={[projectToSection(project, content)]} footer={footer} container={{}} />
    )
}
