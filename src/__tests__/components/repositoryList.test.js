import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";
import { CountFormatter } from "../../components/Count";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const first = repositories.edges[0].node;
      const second = repositories.edges[1].node;

      const names = getAllByTestId("fullName");
      expect(names[0]).toHaveTextContent(first.fullName);
      expect(names[1]).toHaveTextContent(second.fullName);

      const descriptions = getAllByTestId("description");
      expect(descriptions[0]).toHaveTextContent(first.description);
      expect(descriptions[1]).toHaveTextContent(second.description);

      const languages = getAllByTestId("language");
      expect(languages[0]).toHaveTextContent(first.language);
      expect(languages[1]).toHaveTextContent(second.language);

      const forks = getAllByTestId("Forks");
      expect(forks[0]).toHaveTextContent("1.6k");
      expect(forks[1]).toHaveTextContent("69");

      const stars = getAllByTestId("Stars");
      expect(stars[0]).toHaveTextContent(CountFormatter(first.stargazersCount));
      expect(stars[1]).toHaveTextContent(
        CountFormatter(second.stargazersCount)
      );

      const averages = getAllByTestId("Rating");
      expect(averages[0]).toHaveTextContent("88");
      expect(averages[1]).toHaveTextContent("72");

      const reviews = getAllByTestId("Reviews");
      expect(reviews[0]).toHaveTextContent("3");
      expect(reviews[1]).toHaveTextContent("3");
    });
  });
});
