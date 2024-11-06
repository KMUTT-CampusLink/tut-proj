import { success_toast, error_toast } from "../utils/ActivateToast";
import { useMutation } from "@tanstack/react-query";
import { uploadFiles } from "./api";

export const useUploadFilesMutation = (queryClient, reset) => {
  return useMutation({
    mutationFn: (form_data) => uploadFiles(form_data),
    onSuccess: (data, variables) => {
      success_toast("Upload Complete");
      queryClient.invalidateQueries({
        queryKey: ["files-data"],
      });
      reset();
    },
    onError: (errors) => {
      console.log(errors);
      error_toast(errors.message);
      reset();
    },
  });
};
