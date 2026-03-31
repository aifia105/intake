import API from "./client";
import useAuthStore from "@/stores/authStore";

const EXTENSION_TO_MIME: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  heic: "image/heic",
  heif: "image/heif",
};

const getFileMetadata = (imageUri: string) => {
  const cleanUri = imageUri.split("?")[0];
  const uriParts = cleanUri.split("/");
  const lastPart = uriParts[uriParts.length - 1] || "";

  const hasFileName = lastPart.includes(".");
  const extension = hasFileName
    ? lastPart.split(".").pop()?.toLowerCase() || "jpg"
    : "jpg";

  const mimeType = EXTENSION_TO_MIME[extension] || "application/octet-stream";
  const fileName = hasFileName ? lastPart : `upload.${extension}`;

  return { fileName, mimeType };
};

export const processNutrition = async (imageUri: string) => {
  const formData = new FormData();
  const { fileName, mimeType } = getFileMetadata(imageUri);
  const userId = useAuthStore.getState().user?.id;

  formData.append("image", {
    uri: imageUri,
    name: fileName,
    type: mimeType,
  } as any);

  if (userId) {
    formData.append("userId", userId);
  } else {
    throw new Error("User not authenticated");
  }

  try {
    const response = await API.post("/nutrition", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error processing nutrition:", error);
    throw error;
  }
};
