import { useNavigate } from "react-router-native";
import ReviewContainer from "./ReviewContainer";
import useCreateReview from "../../hooks/useCreateReview";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values;

    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        review,
      });
      if (data.createReview) {
        navigate(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer initialValues={initialValues} onSubmit={onSubmit} />;
};

export default CreateReview;
