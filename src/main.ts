import axios from "./axios";
import FormData from "form-data";
import { createReadStream } from "fs";
import { basename } from "path";

export class Config {
  constructor(path: string) {}

  /**
       Initialize configuration of the feature flag service.
     */
  public init() {}
}

/**
   Determine if a feature toggle is turned on or not.
   - key: The name of the feature toggle.
*/
export async function isEnabled(key: string): Promise<boolean> {
  try {
    const response = await axios.get(`/features/${key}`);
    return response.data.val;
  } catch (e) {
    return false;
  }
}

/**
 * Delete a toggle
 - key: the toggle to delete
 Returns true if the toggle was successfully deleted, false otherwise.
 */
export async function deleteToggle(key: string): Promise<boolean> {
  try {
    const response = await axios.delete(`/features/${key}`);
    return response.status >= 200 && response.status < 300;
  } catch (e) {
    return false;
  }
}

/**
   Set the value of a toggle. If no such toggle exists, then it will be created.
   - key: the feature toggle name
   - isEnabled: whether the toggle is on or off
   This will return true if the value has been set and false otherwise.
*/
export async function setToggle(
  key: string,
  isEnabled: boolean
): Promise<boolean> {
  try {
    const response = await axios.post("/features", {
      key,
      val: isEnabled,
    });
    return true;
  } catch (e) {
    return false;
  }
}

/**
   Export a file consisting of feature toggles in JSON form.
 */
export async function exportToggles(path: string) {
  try {
    const form = new FormData();
    form.append("file", createReadStream(path));
    const response = await axios.post("/features/import", form, {
      headers: form.getHeaders(),
    });
    return true;
  } catch (e) {
    return false;
  }
}
