import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Badge, Button, Link, styles } from './../../basics';
import PageLayout from './../../layout/PageLayout';
import Hero from './Hero';
import SocialProof from './../../layout/SocialProof';
import PlaceholderAspectRatio from './../../layout/PlaceholderAspectRatio';
import ValueProp from './ValueProp';
import BenefitItem from './BenefitItem';
import BenefitList from './BenefitList';
import Testimonial from './../../layout/Testimonial';
import CTA from './../../layout/CTA';

const { background, color, spacing, typography, pageMargin, breakpoint } = styles;

const Contrast = styled.div`
  background-color: ${background.app};
`;

const Separator = styled.hr`
  margin: 0;
`;

const Wrapper = styled.div`
  font-size: ${typography.size.s3}px;
  line-height: 1.5;
`;

export default function IndexScreen({ ...props }) {
  return (
    <PageLayout {...props}>
      <Hero />

      <SocialProof
        heading="Trusted by"
        path="images/logos/user"
        brands={['github', 'dropbox', 'airbnb', 'lyft', 'mozilla', 'salesforce']}
      />

      <Separator />

      <ValueProp
        orientation="left"
        media={
          /* eslint-disable jsx-a11y/media-has-caption */
          <PlaceholderAspectRatio ratio={0.75}>
            <video autoPlay muted loop playsInline>
              <source src="videos/storybook-workflow-build-optimized-sm.mp4" type="video/mp4" />
            </video>
          </PlaceholderAspectRatio>
        }
        title="Deliver robust UIs"
        desc="Storybook provides a sandbox to build UI components in isolation so you can develop hard-to-reach states and edge cases."
        lazyloadPlaceholder={<PlaceholderAspectRatio ratio={0.75} />}
      />
      <BenefitList>
        <BenefitItem
          image={<img src="images/home/build-canvas.png" />}
          title="Build components in isolation"
          desc="Create components without needing to stand up screens, fuss with data, or build business logic."
        />
        <BenefitItem
          image={<img src="images/home/build-cases.png" />}
          title="Mock hard to reach use cases"
          desc="Render components in key states that are tricky to reproduce in an app."
        />
        <BenefitItem
          image={<img src="images/home/build-sidebar.png" />}
          title="Document use cases as stories"
          desc={
            <Fragment>
              Save use cases as stories in <Link>plain JavaScript</Link> to revisit during
              development, testing, and QA.
            </Fragment>
          }
        />
        <BenefitItem
          image={<img src="images/home/build-addons.png" />}
          title="Supercharge your workflow with addons"
          desc="Use addons to build UI faster, document a component library, and streamline your workflow."
        />
      </BenefitList>
      <Testimonial
        text={<span>“Lorem ispum dolor sit amet”</span>}
        avatarUrl="https://avatars1.githubusercontent.com/u/263385?s=88&v=4"
        name="Dominic Nguyen"
        jobTitle="Product designer"
        logo="images/logos/user/logo-chromatic.svg"
      />

      <Contrast>
        <Separator />
        <ValueProp
          orientation="right"
          media={
            /* eslint-disable jsx-a11y/media-has-caption */
            <PlaceholderAspectRatio ratio={0.75}>
              <video autoPlay muted loop playsInline>
                <source src="videos/storybook-workflow-test-optimized-sm.mp4" type="video/mp4" />
              </video>
            </PlaceholderAspectRatio>
          }
          title="Ship components with confidence"
          desc="Storybook makes it easy to keep track of edge cases and as a result you get tests for free."
          lazyloadPlaceholder={<PlaceholderAspectRatio ratio={0.75} />}
        />
        <BenefitList>
          <BenefitItem
            image={<img src="images/home/test-visual.png" />}
            title="Ensure consistent user experiences"
            desc="Whenever you write a story you get a handy visual spec. Quickly browse stories to make sure UI looks right."
          />
          <BenefitItem
            image={<img src="images/home/test-snapshot.png" />}
            title="Auto-detect code regressions"
            desc="Get code snapshot tests out of the box with Storyshots, an official addon."
          />
          <BenefitItem
            image={<img src="images/home/test-unit.png" />}
            title="Unit test components"
            desc="Reuse stories in your unit tests to confirm nuanced functionality."
          />
          <BenefitItem
            image={<img src="images/home/test-visual-regression.png" />}
            title="Catch UI changes down to the pixel every commit"
            desc="Pinpoint UI changes with visual testing tools."
          />
        </BenefitList>
        <Testimonial
          text={
            <span>
              “Storybook is an absolutely fantastic app that helps to keep us organized and our
              customers happy.”
            </span>
          }
          avatarUrl="https://avatars1.githubusercontent.com/u/263385?s=88&v=4"
          name="Dominic Nguyen"
          jobTitle="Product designer"
          logo="images/logos/user/logo-chromatic.svg"
        />
        <Separator />
      </Contrast>

      <ValueProp
        orientation="left"
        media={
          /* eslint-disable jsx-a11y/media-has-caption */
          <PlaceholderAspectRatio ratio={0.75}>
            <video autoPlay muted loop playsInline>
              <source src="videos/storybook-workflow-share-optimized-sm.mp4" type="video/mp4" />
            </video>
          </PlaceholderAspectRatio>
        }
        title="Deliver robust UIs"
        desc={
          <div>
            Storybook provides a sandbox to build UI components in isolation so you can develop
            hard-to-reach states and edge cases.
          </div>
        }
        lazyloadPlaceholder={<PlaceholderAspectRatio ratio={0.75} />}
      />
      <BenefitList>
        <BenefitItem
          image={<img src="images/home/share-search.png" />}
          title="Find any component in your app"
          desc="Storybook is a searchable, single source of truth for your UI components."
        />
        <BenefitItem
          image={<img src="images/home/share-collaborate.png" />}
          title="Get timely feedback during development"
          desc="Collaborate on UI implementation with your team by deploying Storybook to the cloud."
        />
        <BenefitItem
          image={<img src="images/home/share-reuse.png" />}
          title="Share components across screens and apps"
          desc="Every story is a use case that your team can find and reuse. "
        />
        <BenefitItem
          image={<img src="images/home/share-document.png" />}
          title="Generate a styleguide automatically"
          desc="Write Markdown to generate a customizable styleguide site. Share it with your team."
        >
          <Badge status="positive">Coming soon</Badge>
        </BenefitItem>
      </BenefitList>
      <CTA
        text={<span>Storybook is quick to install and it’s easy to get started.</span>}
        action={<Button primary>Get started</Button>}
      />
    </PageLayout>
  );
}

IndexScreen.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  children: PropTypes.node,
};

IndexScreen.defaultProps = {
  children: null,
};