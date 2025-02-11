import React, { useEffect, useState } from 'react';
import { basename } from 'path';

const FALLBACK = 'fallback';

export function PureFeatureSnippets({ framework, snippetsByFramework }) {
  let Snippet = snippetsByFramework[framework];
  if (!Snippet) {
    Snippet = snippetsByFramework[FALLBACK];
    if (!Snippet) {
      // TODO: we should add a "to help enable this feature for <Framework />, do Y"
      return null;
    }
  }

  return (
    <div className="aside">
      <Snippet />
    </div>
  );
}

export function FeatureSnippets({ currentFramework, paths }) {
  const [snippetsByFramework, setSnippetsByFramework] = useState({});
  useEffect(() => {
    const fetchSnippetsByFramework = async () => {
      const entries = await Promise.all(
        paths.map(async (path) => {
          // See comment in CodeSnippets
          const { default: ModuleComponent } = await import(`../../../content/docs/${path}`);

          const framework = basename(path, '.mdx');
          return [framework, ModuleComponent];
        })
      );

      setSnippetsByFramework(Object.fromEntries(entries));
    };
    fetchSnippetsByFramework();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PureFeatureSnippets framework={currentFramework} snippetsByFramework={snippetsByFramework} />
  );
}
