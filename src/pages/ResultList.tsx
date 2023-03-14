import React, { useState } from 'react'
import { Card } from 'antd'
import Highlight from '../components/Highlight'

interface Article {
  pmid: string
}

function ResultList() {
  const [articles, setArticles] = useState<Article[]>([
    { pmid: '1212312' },
    { pmid: '1212312' },
    { pmid: '1212312' },
    { pmid: '1212312' },
  ])

  return (
    <div className="flex flex-col gap-4 mx-32">
      {articles.map(a => (
        <Card
          className=""
          title={`PMID ${a.pmid}`}
        >
          <Highlight />
        </Card>
      ))}
    </div>
  )
}

export default ResultList
